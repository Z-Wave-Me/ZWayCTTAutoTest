// Helpers

function ZWayCTTAutoTestHelperDev() {
	self.d = "obj" == "dev" ? lastDevice() : controller();
}

ZWayCTTAutoTestHelperDev.prototype.value = function(path) {
	var dh = self.d;
	var pathArr = path.split(".");
	
	pathArr.forEach(function(name) {
		dh = dh[name];
	});
	
	return dh.value;
}

function ZWayCTTAutoTestHelpers() {
}

ZWayCTTAutoTestHelpers.dev = ZWayCTTAutoTestHelperDev;

ZWayCTTAutoTestHelpers.startInclusion = function() {
	zway.AddNodeToNetwork(true);
}

ZWayCTTAutoTestHelpers.startExclusion = function() {
	zway.RemoveNodeFromNetwork(true);
}

ZWayCTTAutoTestHelpers.yes = function() {
	return "Yes";
}

ZWayCTTAutoTestHelpers.no = function() {
	return "No";
}

ZWayCTTAutoTestHelpers.ok = function() {
	return "Ok";
}

ZWayCTTAutoTestHelpers.open = function() {
	return "Open";
}

ZWayCTTAutoTestHelpers.cancel = function() {
	return "Cancel";
}

ZWayCTTAutoTestHelpers.yesNo = function(ret) {
	return ret ? 'Yes' : 'No';
}

ZWayCTTAutoTestHelpers.alert = function() {
	console.log("Test failed!");
}

ZWayCTTAutoTestHelpers.hex = function(v) {
	return parseInt(v, 16)
}

ZWayCTTAutoTestHelpers.hexWord = function(v1, v2) {
	return (hex(v1) << 16) + hex(v2);
}

ZWayCTTAutoTestHelpers.lastDevice = function() {
	return zway.devices[zway.controller.data.lastIncludedDevice.value];
}

ZWayCTTAutoTestHelpers.controller = function() {
	return zway.controller.data;
}


ZWayCTTAutoTestHelpers.checkDecParam = function(obj, path, paramFunc, paramNum) {
	return function(param) {
		return dev(obj).value(path) == parseInt(param[paramNum]);
	};
}

ZWayCTTAutoTestHelpers.checkByteParam = function(path, paramNum) {
	return function(param) {
		return dev(obj).value(path) == hex(param[paramNum]);
	};
}

ZWayCTTAutoTestHelpers.checkWordParam = function(path, paramNumH, paramNumL) {
	return function(param) {
		return dev(obj).value(path) == hexWord(param[paramNumH], param[paramNumL]);
	};
}

ZWayCTTAutoTestHelpers.isDevicePresent = function(param) {
	return !(param[0] in zway.devices);
}

ZWayCTTAutoTestHelpers.waitInterviewDone = function() {
	var T = 120;
	var ret = false;
	var timer = setInterval(function() {
		T--;
		if (lastDevice().value("data.interviewDone")) {
			ret = true;
			T = 0;
		}
		if (T === 0) clearInterval(timer);
	}, 1000);
	while (T) {
		sleep(0.1);
	};
	
	return ret;
}