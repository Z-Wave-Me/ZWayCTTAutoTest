// Helpers

function ZWayCTTAutoTestHelperDev(obj) {
	switch(obj) {
		case "dev":
			this.d = ZWayCTTAutoTestHelpers.lastDevice();
			break;
		case "ctrldev":
			this.d = ZWayCTTAutoTestHelpers.controllerDevice();
			break;
		case "ctrl":
			this.d = ZWayCTTAutoTestHelpers.controller();
			break;
		default:
			ZWayCTTAutoTestHelpers.alert();
	}
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
	
	if (success) {
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
}

ZWayCTTAutoTestHelpers.startInclusion = function() {
	ZWayCTTAutoTestHelpers.waitManagementIdle();
	ZWayCTTAutoTestHelpers.prepareS2();
	zway.controller.AddNodeToNetwork(true);
}

ZWayCTTAutoTestHelpers.resetAndStartInclusion = function() {
	ZWayCTTAutoTestHelpers.reset(ZWayCTTAutoTestHelpers.startInclusion);
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

ZWayCTTAutoTestHelpers.alert = function(msg) {
	console.log("Test failed!" + (msg ? " " + msg : ""));
	return ZWayCTTAutoTestHelpers.no();
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
	return (ZWayCTTAutoTestHelpers.hex(v1) << 8) + ZWayCTTAutoTestHelpers.hex(v2);
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

ZWayCTTAutoTestHelpers.controllerDevice = function() {
	return zway.devices[zway.controller.data.nodeId.value];
}

ZWayCTTAutoTestHelpers.controller = function() {
	return zway.controller.data;
}

ZWayCTTAutoTestHelpers.exec = function(f) {
	return f();
}

ZWayCTTAutoTestHelpers.checkDecParam = function(obj, path, paramNum) {
	return function() {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.decParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkFloatParam = function(obj, path, paramNum) {
	return function() {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.decParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkByteParam = function(obj, path, paramNum) {
	return function() {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.byteParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkWordParam = function(obj, path, paramNumH, paramNumL) {
	return function() {
		return ZWayCTTAutoTestHelpers.dev(obj).value(path) == ZWayCTTAutoTestHelpers.wordParam(paramNumH, paramNumL);
	};
}

ZWayCTTAutoTestHelpers.checkMappedParam = function(obj, path, func, paramNum) {
	return function() {
		return func(ZWayCTTAutoTestHelpers.dev(obj).value(path)) == ZWayCTTAutoTestHelpers.getParam(paramNum);
	};
}

ZWayCTTAutoTestHelpers.checkScale = function(cc, selector, scale_param, value_param) {
	return function() {
		var DELTA = 0.00001; // to handle float approximation errors
		
		var data = ZWayCTTAutoTestHelpers.lastDevice()[cc].data;
		
		var scale = typeof scale_param === 'number' ? ZWayCTTAutoTestHelpers.getParam(scale_param) : scale_param;
		var value = ZWayCTTAutoTestHelpers.floatParam(value_param);
		
		for (var i in data) {
			if (!Number.isInteger(Number(i))) continue;
			
			if (data[i][selector].value === scale) {
				return (data[i].val.value - value) < DELTA;
			}
			else if ((scale === '°C' && data[i][selector].value === '°F') || (scale === '°F' && data[i][selector].value === '°C') || scale === 'unknown scale') {
				return (data[i].intVal.value / (Math.pow(10, data[i].precision.value)) - value) < DELTA;
			}
		}
		
		return false;
	};
};

ZWayCTTAutoTestHelpers.checkAllScalesZero = function(cc) {
	return function() {
		var data = ZWayCTTAutoTestHelpers.lastDevice()[cc].data;
		
		for (var i in data) {
			if (!Number.isInteger(Number(i))) continue;
			
			if (data[i].val.value !== 0) return false;
		}
		
		return true;
	};
};

ZWayCTTAutoTestHelpers.forceInterview = function() {
	ZWayCTTAutoTestHelpers.lastDevice().data.nodeInfoFrame = "";
	ZWayCTTAutoTestHelpers.lastDevice().RequestNodeInformation();
}

ZWayCTTAutoTestHelpers.isDevicePresent = function(i) {
	return function() {
		return !(ZWayCTTAutoTestHelpers.getParam(i) in zway.devices);
	};
}

ZWayCTTAutoTestHelpers.prepareS2 = function() {
	zway.controller.data.S2AutoInclude.keys = -1; // all keys
	zway.controller.data.S2AutoInclude.pin = 0; // use known pin
}

ZWayCTTAutoTestHelpers.wait = function(timeout, checkFunc) {
	var d = Date.now() + timeout * 1000;
	
	while (Date.now() < d) {
		if (checkFunc && checkFunc()) {
			return true;
		}
		processPendingCallbacks();
	}
	
	return false;
}

ZWayCTTAutoTestHelpers.waitAndExecute = function(timeout, func) {
	return function() {
		ZWayCTTAutoTestHelpers.wait(timeout);
		return func();
	};
}

ZWayCTTAutoTestHelpers.waitInterviewDone = function() {
	var T = 120;
	
	return ZWayCTTAutoTestHelpers.wait(T, function() {
		return ZWayCTTAutoTestHelpers.dev("dev").value("data.interviewDone");
	});
}

ZWayCTTAutoTestHelpers.waitControllerInterviewDone = function() {
	var T = 120;
	
	return ZWayCTTAutoTestHelpers.wait(T, function() {
		var selfId = zway.controller.data.nodeId.value;
		var ctrlId = zway.devices[selfId].data.secureControllerId.value;
		return zway.devices[ctrlId].data.interviewDone.value;
	});
}

ZWayCTTAutoTestHelpers.waitManagementIdle = function() {
	var T = 120;

	return ZWayCTTAutoTestHelpers.wait(T, function() {
		return zway.controller.data.controllerState.value == 0;
	});
}

// CCs helpers

ZWayCTTAutoTestHelpers.ccCentralSceneKeyAttribute = function(str) {
	switch(str) {
		case "Key Pressed 1 time":  return 0;
		case "released":            return 1;
		case "held down":           return 2;
		case "Key Presses 2 times": return 3;
		case "Key Presses 3 times": return 4;
		case "Key Presses 4 times": return 5;
		case "Key Presses 5 times": return 6;
		case "Key Pressed 2 times": return 3;
		case "Key Pressed 3 times": return 4;
		case "Key Pressed 4 times": return 5;
		case "Key Pressed 5 times": return 6;
		default:
			ZWayCTTAutoTestHelpers.alert();
			return null;
	}
}
