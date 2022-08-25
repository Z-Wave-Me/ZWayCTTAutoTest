// Helpers

function ZWayCTTAutoTestHelperDev(obj) {
	this.d = (obj == "dev") ? ZWayCTTAutoTestHelpers.lastDevice() : ZWayCTTAutoTestHelpers.controller();
}

ZWayCTTAutoTestHelperDev.prototype.value = function(path) {
	var dh = this.d;
	var pathArr = path.split(".");
	
	pathArr.forEach(function(name) {
		dh = dh[name];
	});
	
	return dh.value;
}

function ZWayCTTAutoTestHelpers() { }

ZWayCTTAutoTestHelpers.dev = function(obj) {
	return new ZWayCTTAutoTestHelperDev(obj);
}

ZWayCTTAutoTestHelpers.reset = function(success) {
	zway.controller.SetDefault();
	
	var onDone = function() {
		if (this.value === 0) {
			setTimeout(function() { // to make sure post-reset initalization is finished (set self to SIS)
				success();
			}, 10000);
			zway.controller.data.controllerState.unbind(onDone);
		}
	};
	
	zway.controller.data.controllerState.bind(onDone);
}

ZWayCTTAutoTestHelpers.startInclusion = function() {
	ZWayCTTAutoTestHelpers.waitManagementIdle();
	ZWayCTTAutoTestHelpers.prepareS2();
	zway.controller.AddNodeToNetwork(true);
}

ZWayCTTAutoTestHelpers.resetAndStartInclusion = function() {
	this.reset(ZWayCTTAutoTestHelpers.startInclusion);
}

ZWayCTTAutoTestHelpers.startExclusion = function() {
	zway.controller.RemoveNodeFromNetwork(true);
}

ZWayCTTAutoTestHelpers.startLearnMode = function() {
	zway.controller.SetLearnMode(true);
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

ZWayCTTAutoTestHelpers.setParams = function(params) {
	ZWayCTTAutoTestHelpers.params = params;
}

ZWayCTTAutoTestHelpers.getParam = function(paramNum) {
	return ZWayCTTAutoTestHelpers.params[paramNum];
}

ZWayCTTAutoTestHelpers.getParamsCount = function() {
	return ZWayCTTAutoTestHelpers.params.length - 1; // don't report the zeroth param
}

ZWayCTTAutoTestHelpers.hex = function(v) {
	return parseInt(v, 16);
}

ZWayCTTAutoTestHelpers.hexWord = function(v1, v2) {
	return (ZWayCTTAutoTestHelpers.hex(v1) << 16) + ZWayCTTAutoTestHelpers.hex(v2);
}

ZWayCTTAutoTestHelpers.decParam = function(paramNum) {
	return parseInt(ZWayCTTAutoTestHelpers.getParam(paramNum));
}

ZWayCTTAutoTestHelpers.floatParam = function(paramNum) {
	return parseFloat(ZWayCTTAutoTestHelpers.getParam(paramNum));
}

ZWayCTTAutoTestHelpers.byteParam = function(paramNum) {
	return ZWayCTTAutoTestHelpers.hex(ZWayCTTAutoTestHelpers.getParam(paramNum));
}

ZWayCTTAutoTestHelpers.wordParam = function(paramNumH, paramNumL) {
	return ZWayCTTAutoTestHelpers.hexWord(ZWayCTTAutoTestHelpers.getParam(paramNumH), ZWayCTTAutoTestHelpers.getParam(paramNumL));
}

ZWayCTTAutoTestHelpers.lastDevice = function() {
	return zway.devices[zway.controller.data.lastIncludedDevice.value];
}

ZWayCTTAutoTestHelpers.controller = function() {
	return zway.controller.data;
}

ZWayCTTAutoTestHelpers.checkDecParam = function(obj, path, paramNum) {
	return function(param) {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.decParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkFloatParam = function(obj, path, paramNum) {
	return function(param) {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.decParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkByteParam = function(obj, path, paramNum) {
	return function(param) {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.byteParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkWordParam = function(obj, path, paramNumH, paramNumL) {
	return function(param) {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.wordParam(paramNumH, paramNumL);
	};
}

ZWayCTTAutoTestHelpers.checkMappedParam = function(obj, path, func, paramNum) {
	return function(param) {
		return func(ZWayCTTAutoTestHelpers.dev(obj).value(path)) == ZWayCTTAutoTestHelpers.getParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkScale = function(cc, scale, value) {
	var data = ZWayCTTAutoTestHelpers.lastDevice()[cc].data;
	
	for (var i in data) {
		if (!Number.isInteger(Number(i))) continue;
		
		if (data[i].scaleString.value === scale) {
			return data[i].val.value === value;
		}
	}
	
	return false;
};

ZWayCTTAutoTestHelpers.checkAllScalesZero = function(cc) {
	var data = ZWayCTTAutoTestHelpers.lastDevice()[cc].data;
	
	for (var i in data) {
		if (!Number.isInteger(Number(i))) continue;
		
		if (data[i].val.value !== 0) return false;
	}
	
	return true;
};

ZWayCTTAutoTestHelpers.prepareS2 = function() {
	zway.controller.data.S2AutoInclude.keys = -1; // all keys
	zway.controller.data.S2AutoInclude.pin = 0; // use known pin
}

ZWayCTTAutoTestHelpers.isDevicePresent = function(params) {
	return !(params[0] in zway.devices);
}

ZWayCTTAutoTestHelpers.wait = function(checkFunc, timeout) {
	var d = Date.now() + timeout * 1000;
	
	while (Date.now() < d) {
		if (checkFunc && checkFunc()) {
			return true;
		}
		processPendingCallbacks();
	}
	
	return false;
}

ZWayCTTAutoTestHelpers.waitInterviewDone = function() {
	var T = 120;
	
	return ZWayCTTAutoTestHelpers.wait(function() {
		return ZWayCTTAutoTestHelpers.dev("dev").value("data.interviewDone");
	}, T);
}

ZWayCTTAutoTestHelpers.waitManagementIdle = function() {
	var T = 120;

	return ZWayCTTAutoTestHelpers.wait(function() {
		return zway.controller.data.controllerState.value == 0;
	}, T);
}
