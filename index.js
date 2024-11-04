/*** ZWayCTTAutoTest Z-Way HA module *******************************************

 Version: 1.1
 (c) Z-Wave.Me, 2022
 -----------------------------------------------------------------------------
 Author: Yurkin Vitaliy <aivs@z-wave.me>, Poltorak Serguei <ps@z-wave.me>
 Implements ZWayCTTAutoTest support
 ******************************************************************************/

// ----------------------------------------------------------------------------
// --- Class definition, inheritance and setup
// ----------------------------------------------------------------------------

function ZWayCTTAutoTest (id, controller) {
	// Call superconstructor first (AutomationModule)
	ZWayCTTAutoTest.super_.call(this, id, controller);

	this.bufferLen = 0;
	this.buffer;

	this.buttons = [ "»OK:SHOW«", "»YES-NO:SHOW«", "»OK-CANCEL:SHOW«", "»SKIP:SHOW«", "»SKIP:DISABLE«" ];
	
	this.disableDebug = false;
	this.noAction = false;
}

inherits(ZWayCTTAutoTest, AutomationModule);

_module = ZWayCTTAutoTest;

// ----------------------------------------------------------------------------
// --- Module instance initialized
// ----------------------------------------------------------------------------

ZWayCTTAutoTest.prototype.init = function (config) {
	ZWayCTTAutoTest.super_.prototype.init.call(this, config);
	
	var self = this;
	
	this.setup();
	
	this.webSocket = new sockets.websocket(9090);
	this.webSocketClients = [];
	
	this.webSocket.onconnect = function () {
		self.debug("Client connected, sending ping and devices data");
		self.webSocketClients.push(this);
	}
	
	this.webSocket.onmessage = function(event) {
		var data = JSON.parse(decodeURIComponent(escape(event.data)).replace(/\t/g, "\\t"));
		self.receive(data);
	};
	
	this.webSocket.onclose = function() { 
		if (this === self.webSocket) {
			self.debug("Server websocket closed"); 
		} else {
			self.debug("Client disconnected");
		}
	}
	
	this.webSocket.onerror = function(event) { 
		self.debug("ERROR: ", event.data);
	}

	ws.allowExternalAccess("ZWayCTTAutoTestReload", this.controller.auth.ROLE.ADMIN);
	global["ZWayCTTAutoTestReload"] = function() {
		var _buf = self.buffer;
		self.controller.reinitializeModule("ZWayCTTAutoTest", "userModules/");
		_.find(self.controller.registerInstances, function(i) { return i.meta.moduleName === "ZWayCTTAutoTest"}).receive({log: _buf.reverse().join("\n")});
		return {
			status: 200,
			body: "Reloaded"
		}
	}
	
	ws.allowExternalAccess("ZWayCTTAutoTestCheck", this.controller.auth.ROLE.ADMIN);
	global["ZWayCTTAutoTestCheck"] = function() {
		self.checkQuestions();
		return {
			status: 200,
			body: "Reloaded"
		}
	}
	
	ws.allowExternalAccess("ZWayCTTAutoTestParseCTTLog", this.controller.auth.ROLE.ADMIN);
	global["ZWayCTTAutoTestParseCTTLog"] = function() {
		self.parseCTTLog();
		return {
			status: 200,
			body: "Parsed"
		}
	}
};

ZWayCTTAutoTest.prototype.stop = function () {
	ws.revokeExternalAccess("ZWayCTTAutoTestReload");
	delete global["ZWayCTTAutoTestReload"];
	ws.revokeExternalAccess("ZWayCTTAutoTestCheck");
	delete global["ZWayCTTAutoTestCheck"];
	ws.revokeExternalAccess("ZWayCTTAutoTestParseCTTLog");
	delete global["ZWayCTTAutoTestParseCTTLog"];
	
	this.webSocketClients.forEach(function(cli) {
		cli.close();
	});
	this.webSocket && this.webSocket.close();
	
	ZWayCTTAutoTest.super_.prototype.stop.call(this);
};

// ----------------------------------------------------------------------------
// --- Module methods
// ----------------------------------------------------------------------------

ZWayCTTAutoTest.prototype.debug = function(msg) {
	if (!this.disableDebug) {
		console.log(this.getName() + ": " + msg);
	}
};

ZWayCTTAutoTest.prototype.setup = function () {
	var self = this;

	executeFile(this.meta.location + "/" + "helpers.js");
	executeFile(this.meta.location + "/" + "handlers.js");

	ZWayCTTAutoTestHelpers.send = function(ret) {
		self.sendButton(ret());
	};

	this.qa = ZWayCTTAutoTestQA(ZWayCTTAutoTestHelpers);
	this.iq = ZWayCTTAutoTestIgnoreQ();

	function escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}
	
	// find buffer length based on the longest question
	this.qa.forEach(function(test) {
		if (self.bufferLen < test.question.length) {
			self.bufferLen = test.question.length;
		}
		
		test.question_orig = test.question;
		test.question = test.question.map(function(line) {
			return new RegExp(".*" + escapeRegExp(line).replace(/####/g, "(.*)") + ".*");
		});
	});
	
	this.iq = this.iq.map(function(q) {
		return new RegExp(".*" + escapeRegExp(q).replace(/####/g, "(.*)") + ".*");
	});
	this.iq.push(/^[ \t]*$/);
	 
	this.buffer = Array(this.bufferLen).map(function() { return "" });
};

ZWayCTTAutoTest.prototype.receive = function (message) {
	var self = this;
	
	if (message.log) {
		var lines = message.log.split("\n");
		lines.forEach(function(line) {
			line = line.replace(/{color(:[^}]+)?}/g, ''); // remove {color:xxx} and {color}
			
			// check ignore list
			self.iq.forEach(function(q) {
				if (line.match(q)) {
					self.debug("Ignored message: " + line);
					line = "";
				}
			});
			
			if (line.length === 0) return;
			
			self.debug("Received message: " + line);
			
			// roll the buffer
			for (var i = self.bufferLen - 1; i > 0; i--) {
				self.buffer[i] = self.buffer[i - 1];
			}
			self.buffer[0] = line;
			
			// match questions
			var matched = self.qa.some(function(test) { // some is used to match only the first questions
				var params = [];
				for (var i = 0; i < test.question.length; i++) {
					var m = self.buffer[i].match(test.question[test.question.length - 1 - i]);
					//console.log(!!m, test.question[test.question.length - 1 - i].toString());
					if (!m) return false;
					
					var _params = [];
					for (var k = 1; k < m.length; k++) {
						_params.push(m[k]);
					}
					params = _params.concat(params); // we are stepping from end to start
				}
				
				params.unshift("zeroth param"); // params are numbered from 1
				
				console.debug("Matched with params " + JSON.stringify(params));
				
				ZWayCTTAutoTestHelpers.setParams(params);
				
				// matched
				
				if (self.noAction) return true; // don't take any action (for log parsing)
				
				var ret;
				if (test.action) {
					ret = test.action();
				}
				
				if (test.answer) {
					var answer = test.answer(ret);
					
					if (answer) {
						self.sendButton(answer);
					}
				}
				return true;
			});
			
			if (!matched && self.buttons.some(function(button) { return line.match(button); })) {
				if (line.match("»SKIP:SHOW«") || line.match("»SKIP:DISABLE«")) return; // skip those buttons
				
				var answer = "undefined";
				if (line.match("»OK-CANCEL:SHOW«") || line.match("»OK:SHOW«")) answer = "ok";
				else if (line.match("»YES-NO:SHOW«")) answer = "yesNo";
				
				self.buffer.map(function(l) { return self.buttons.some(function(button) { return l.match(button); }); }).slice(0, -1).reverse()
				// reverse, remove time, \r and empty lines
				var clear = false;
				var buf = self.buffer.slice().map(function(l, i) {
					if (clear) {
						return "";
					}
					if (i > 0 && self.buttons.some(function(button) { return l.match(button); })) {
						// found another button, so clear this and all subsequent lines
						clear = true;
						return "";
					}
					return l.replace(/^[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}\w*/, "").replace(/\r$/, "").trim();
				}).filter(function(l) { // remove empty items
					return l.length
				}).reverse(); // reverse to match the question
				
				// print the question
				console.log("\n\t\t\t{\n\t\t\t\tquestion: " + JSON.stringify(buf) + ",\n\t\t\t\taction: undefined,\n\t\t\t\tanswer: " + answer + "\n\t\t\t},");
			}
		});
	}
};

ZWayCTTAutoTest.prototype.sendButton = function (button) {
	var response = {
		button: button
	}
	var msg = JSON.stringify(response);
	
	this.debug("Sending message: " + button);
	this.webSocketClients.forEach(function(cli) {
		cli.send(msg);
	});
};

ZWayCTTAutoTest.prototype.checkQuestions = function () {
	var self = this;
	
	var zats_qa = fs.load(this.meta.location + "/" + "2023-10-30 CTT ZATS Test Interaction List.txt");

	var lines = zats_qa.split("\n");
	lines.forEach(function(line) {
		if (line.match(/^.*\.cs:/)) return; // skip file names
		if (line.match(/^\t\* message/)) return;
		if (line.match(/^\t\* question/)) return;
		if (line.match(/^\t\* resultQuestion/)) return;
		if (line.match(/^\t\* userQuestion/)) return;
		if (line.match(/^\t\* $/)) return;
		if (line.match(/^\t\* "Open Wiki page in web browser ..."$/)) return;
		
		var parts = line.split("\"");
		if (parts.length < 3) return;
		
		parts = parts.slice(1, -1);
		parts = parts.map(function(l, i) { return i % 2 ? '####' : l; });

		line = parts.join("");
		
		// check ignore list
		self.iq.forEach(function(q) {
			if (line.match(q)) {
				//self.debug("Ignored message: " + line);
				line = "";
			}
		});
		
		if (line.length === 0) return;
		
		//self.debug("Checking message: " + line);
		
		// match questions
		if (!self.qa.some(function(test) {
			var q = test.question_orig.join("\n");
			self.buttons.forEach(function(b) {
				q = q.replace("\n" + b, "");
			});
			//console.logJS("q", q);
			//console.logJS("l", line);
			return q == line;
		})) {
			self.debug("Questions not handled: " + line);
		};
	});
	
};

ZWayCTTAutoTest.prototype.parseCTTLog = function () {
	var self = this;
	
	console.log("Parsing file CTTLogs.txt");
	
	var content = fs.loadText(this.meta.location + "/CTTLogs.txt");
	
	this.disableDebug = true;
	this.noAction = true;
	console.log("Starting");
	
	self.receive({log: content});
	
	console.log("Done");
	this.noAction = false;
	this.disableDebug = false;
};
