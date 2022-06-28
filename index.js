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
		self.webSocketClients.push(this);;
	}
	
	this.webSocket.onmessage = function(event) {
		self.debug("Received message: " + event.data);
		
		var data = JSON.parse(decodeURIComponent(escape(event.data)));
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
};

ZWayCTTAutoTest.prototype.stop = function () {
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

	this.qa = ZWayCTTAutoTestQA(ZWayCTTAutoTestHelpers);

	function escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}
	
	// until the but in CTT is fixed, remove all :SHOW lines
	this.qa.map(function(test) {
		test.question = test.question.slice(0,-1);
		return test;
	});
	
	// find buffer length based on the longest question
	this.qa.forEach(function(test) {
		if (self.bufferLen < test.question.length) {
			self.bufferLen = test.question.length;
		}
		
		test.question.map(function(line) {
			return new RegExp(".*" + escapeRegExp(line).replace("####", "(.*)") + ".*");
		});
	});
	 
	this.buffer = Array(this.bufferLen);
};

ZWayCTTAutoTest.prototype.receive = function (message) {
	var self = this;
	
	if (message.log) {
		line = message.log;
		
		// roll the buffer
		for (var i = this.bufferLen - 1; i > 0; i--) {
			this.buffer[i] = this.buffer[i - 1];
		}
		this.buffer[0] = line;
		
		// match questions
		this.qa.forEach(function(test) {
			for (var i = 0; i < test.question.length; i++) {
				if (!self.buffer[i].match(test.question[test.question.length - 1 - i])) return;
			}
			
			// matched
			
			var ret;
			if (test.action) {
				ret = test.action();
			}
			
			var answer = test.answer(ret);
			
			self.sendButton(answer);
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
