/*** ZWayCTTAutoTest Z-Way HA module *******************************************

 Version: 1.0
 (c) Z-Wave.Me, 2022
 -----------------------------------------------------------------------------
 Author: Yurkin Vitaliy <aivs@z-wave.me>
 Implements ZWayCTTAutoTest support
 ******************************************************************************/

// ----------------------------------------------------------------------------
// --- Class definition, inheritance and setup
// ----------------------------------------------------------------------------

function ZWayCTTAutoTest (id, controller) {
	// Call superconstructor first (AutomationModule)
	ZWayCTTAutoTest.super_.call(this, id, controller);
}

inherits(ZWayCTTAutoTest, AutomationModule);

_module = ZWayCTTAutoTest;

// ----------------------------------------------------------------------------
// --- Module instance initialized
// ----------------------------------------------------------------------------

ZWayCTTAutoTest.prototype.init = function (config) {
	ZWayCTTAutoTest.super_.prototype.init.call(this, config);

	var self = this;

	var webSocket = new sockets.websocket(9090);
	var webSocketClient = null;

	webSocket.onconnect = function () {
		debugPrint("ZWayCTTAutoTest: Client connected, sending ping and devices data");
		webSocketClient = this;
		webSocketClient.send(JSON.stringify(self.controller.devices));
	}

	webSocket.onmessage = function(event) {
		debugPrint("ZWayCTTAutoTest DATA:", event.data);
		var data = JSON.parse(event.data);

		if (data.button && data.button === "YES") {
			var response = {
				button: "OK"
			}
    		webSocketClient.send(JSON.stringify(response));
		}

/*
		var response = self.handleMessage({
			method: "GET",
			headers: {
				Authorization: "Bearer " + data.token
			},
			peer: {
				address: "0.0.0.0"
			},
			url: data.url
		});
		*/
	};

	webSocket.onclose = function() { 
		if (this === webSocket) {
			debugPrint("ZWayCTTAutoTest: Server websocket closed"); 
		} else {
			debugPrint("ZWayCTTAutoTest: Client disconnected");
		}
	}

	webSocket.onerror = function(event) { 
		debugPrint("ZWayCTTAutoTest ERROR: ", event.data);
	}

	this.webSocket = webSocket;
};

ZWayCTTAutoTest.prototype.stop = function () {
	this.webSocket && this.webSocket.close();
	this.webSocket = null;

	ZWayCTTAutoTest.super_.prototype.stop.call(this);
};

// ----------------------------------------------------------------------------
// --- Module methods
// ----------------------------------------------------------------------------

ZWayCTTAutoTest.prototype.handleMessage = function (req) {
	console.logJS(req);
	var q = req.url.substring(1).replace(/\//g, '.');
	if (!q) return null;
	
	var found = null;
	if (ws.externalNames.some(function(ext) {
		found = ext;
		return (ext.name.length < q.length && q.slice(0, ext.name.length + 1) === ext.name + ".") || (ext.name === q);
	}) && found) {
		var auth = controller.auth.resolve(req, found.role);
		if (!auth) {

			return {
				status: 401,
				body: "Not logged in"
			};

		} else if (controller.auth.isAuthorized(auth.role, found.role)) {

			// fill user field
			req.user = auth.user;
			req.role = auth.role;
			req.authToken = auth.token;
			
			var cache = ws.evalCache || (ws.evalCache = {});
			var handler = cache[found.name] || (cache[found.name] = evalPath(found.name));
			console.logJS(found.name);
			console.logJS(typeof handler);
			return handler(req.url.substring(found.name.length + 1), req);

		} else {

			return {
				status: 403,
				body: 'Permission denied'
			};
			
		}
	}
	return null;
}
