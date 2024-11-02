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

	this.buttons = [ "»OK:SHOW«", "»YES-NO:SHOW«", "»OK-CANCEL:SHOW«", "»SKIP:DISABLE«" ];
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
};

ZWayCTTAutoTest.prototype.stop = function () {
	ws.revokeExternalAccess("ZWayCTTAutoTestReload");
	delete global["ZWayCTTAutoTestReload"];
	ws.revokeExternalAccess("ZWayCTTAutoTestCheck");
	delete global["ZWayCTTAutoTestCheck"];
	
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
	console.log(this.getName() + ": " + msg);
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
			self.qa.some(function(test) { // some is used to match only the first questions
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
				
				console.logJS("Matched with params", params);
				
				ZWayCTTAutoTestHelpers.setParams(params);
				
				// matched
				
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