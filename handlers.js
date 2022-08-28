function ZWayCTTAutoTestQA(helpers) {
	with(helpers) {
		return qa = [
			// Preparing questions:
			//  cat CTT-log.txt | tr -d '\r' | sed 's/{[^}]*}//g;s/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9] //;s/^             //' | grep -aB 1 -A 1 :SHOW | awk '{if(NR%4==1)printf("%s", "{ question: [\"" $0 "\", "); if(NR%4==2) printf("\"" $0 "\"],"); if(NR%4==3) print(" answer: \"" $0 "\" },")}'| sort -u
			
			// After editing reload the module using
			//  http://localhost:8083/ZAutomation/api/v1/modules/reinitialize/ZWayCTTAutoTest
			
			// Generic questions about the device
			// Fill it according to your DUT!
			{
				question: ["Does the DUT empower the consumer or end user to lock or unlock the Anti-Theft feature of a controlled node?", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["Does the DUT provide a QR Code scanning capability?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT's UI allow to set a Dimming Duration for Start Level Change?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT's UI allow to set a Start Level for Start Level Change?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT support S0 security level?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT use the identify command for any other purpose than a node identification application?", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["Does the product support the frequency US_LR?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Has the DUT an integrated Z-Wave ASIC/Module?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Include the CTT Slave into the DUT network ...", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Is the DUT mains-powered?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["the DUT can be reset to factory settings?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Please navigate to the visualisation of the emulated device on the DUT's UI. Is there any possibility to see the status", "or control the device using the Basic Command Class?", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["Does the DUT empower the consumer or end user to lock or unlock the Anti-Theft feature of a controlled node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Will the product be available in USA?", "»YES-NO:SHOW«"],
				answer: yes
			},
			
			// Controled CCs (automate in future?)
			{
				question: ["Does the DUT control the Command Class", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_ASSOCIATION' at least in Version 2?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_ASSOCIATION_GRP_INFO' at least in Version 3?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_BASIC' at least in Version 2?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_CENTRAL_SCENE' at least in Version 3?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_CRC_16_ENCAP' at least in Version 1?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_FIRMWARE_UPDATE_MD' at least in Version 5?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_INDICATOR' at least in Version 3?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_METER' at least in Version 5?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_MULTI_CHANNEL' at least in Version 4?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_MULTI_CHANNEL_ASSOCIATION' at least in Version 3?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_SENSOR_MULTILEVEL' at least in Version 11?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_NOTIFICATION' at least in Version 8?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_SECURITY' at least in Version 1?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_SECURITY_2' at least in Version 1?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_VERSION' at least in Version 2?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control the Command Class 'COMMAND_CLASS_WAKE_UP' at least in Version 2?", "»YES-NO:SHOW«"],
				answer: yes
			},

			
			// Common questions
			{
				question: ["Activate the Add mode in the UI of the DUT and click 'OK' to start Inclusion by the DUT!", "»OK:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Activate the Remove mode in the UI of the DUT and click 'OK' to start Exclusion by the DUT!", "»OK:SHOW«"],
				action: startExclusion,
				answer: ok
			},
			{
				question: ["Click 'Ok' as soon as the Inclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Click ok to start test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Click 'OK' to start test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["#### within timeout! Retry?", "»YES-NO:SHOW«"],
				answer: alert
			},
			{
				question: ["Spot-check test of a user triggered complete comissioning interview failed! Retry?", "»YES-NO:SHOW«"],
				answer: alert
			},
			{
				question: ["Has the DUT removed this node (ID = ####) from its Z-Wave nodes list? (see Requirement Number CL:005A.01.52.01.1)", "»YES-NO:SHOW«"],
				action: isDevicePresent,
				answer: yesNo
			},
			{
				question: ["Inclusion and interview passed, click 'OK' to continue with testing minimum user and additional control requirements.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click OK to continue with testing minimum user and additional control requirements.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click OK to continue with testing minimum user requirements.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait for Interview to be finished and proceed with clicking 'OK'!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait for the Inclusion to be finished and continue by clicking 'OK'!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait for the interview to be finished and click 'OK' to proceed!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait for the interview to be finished and visit the #### visualisation for node #### in the DUT's", "UI!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait for the interview to be finished and continue with clicking 'OK'!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click 'OK' to continue with testing minimum user requirements.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click 'OK' to continue with testing node properties.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please make sure that the current state of the emulated #### device is visible on the DUT's UI and confirm to", "start the test sequence!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please make sure that the current state of the emulated #### device is visible on the DUT's UI and confirm to start", "the test sequence!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please reset the DUT and confirm or start Exclusion of the DUT!", "Removing node..."],
				answer: startLearnMode
			},
			{
				question: ["Wait for activating Learn Mode on DUT..."],
				answer: startLearnMode
			},
			{
				question: ["Please reset the DUT, start Add Mode and confirm these steps..."],
				answer: resetAndStartInclusion
			},
			
			// List of controlled CCs
			{
				question: ["Is COMMAND_CLASS_ANTITHEFT_V3 controlled?", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["Is COMMAND_CLASS_APPLICATION_STATUS controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_ASSOCIATION_GRP_INFO_V3 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_ASSOCIATION_V3 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_BARRIER_OPERATOR controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_BASIC_V2 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_CENTRAL_SCENE_V3 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_CLOCK controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_CONFIGURATION_V4 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is COMMAND_CLASS_CONTROLLER_REPLICATION controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},

			
			// CCR_BarrierOperatorCC_Rev01
			{
				question: ["BARRIER_OPERATOR_SET with target value='0x####' (initiate ####)"],
				answer: function() { lastDevice().BarrierOperator.Set(byteParam(1)) }
			},
			{
				question: ["BARRIER_OPERATOR_SIGNAL_SET with target value='0x####' (####) for Subsytem 'AudibleNotification'"],
				answer: function() { lastDevice().BarrierOperator.SignalSet(1, byteParam(1)) }
			},
			{
				question: ["BARRIER_OPERATOR_SIGNAL_SET with target value='0x####' (####) for Subsytem 'VisualNotification'"],
				answer: function() { lastDevice().BarrierOperator.SignalSet(2, byteParam(1)) }
			},
			
			// CCR_DoorLockCC_Rev01
			{
				question: ["Set Door Lock Operation Mode UnsecuredWithTimeout"],
				answer: function() { lastDevice().DoorLock.Set(1) }
			},
			{
				question: ["Set Door Lock Operation Mode Unsecured"],
				answer: function() { lastDevice().DoorLock.Set(0) }
			},
			{
				question: ["Set Door Lock Operation Mode Secured"],
				answer: function() { lastDevice().DoorLock.Set(255) }
			},
			{
				question: [
					"Set Door Lock Configuration:",
					"Operation Type:    '####'",
					"Inside Handle 1:   '####'",
					"Inside Handle 2:   '####'",
					"Inside Handle 3:   '####'",
					"Inside Handle 4:   '####'",
					"Outside Handle 1:  '####'",
					"Outside Handle 2:  '####'",
					"Outside Handle 3:  '####'",
					"Outside Handle 4:  '####'",
					"Lock Timeout:      #### seconds", 
					"Auto-relock Time:  #### seconds", 
					"Hold&Release Time: #### seconds",
					"Block to Block:    '####'",
					"Twist Assist:      '####'",
					"*******************************************************************" // to distinguish V1 from newer
				],
				answer: function() { lastDevice().DoorLock.ConfigurationSet(
								getParam(1) == "TimedOperation" ? 2 : 1, // mode
								(getParam(6) == 'enabled' ? 1 : 0) + (getParam(7) == 'enabled' ? 1 : 0) * 2 + (getParam(8) == 'enabled' ? 1 : 0) * 4 + (getParam(9) == 'enabled' ? 1 : 0) * 8, // outer handle
								(getParam(2) == 'enabled' ? 1 : 0) + (getParam(3) == 'enabled' ? 1 : 0) * 2 + (getParam(4) == 'enabled' ? 1 : 0) * 4 + (getParam(5) == 'enabled' ? 1 : 0) * 8, // inner handle
								decParam(10), // Lock time
								decParam(11), // AR time
								decParam(12), // H&R time
								getParam(14) == 'enabled' ? true : false, // TA
								getParam(13) == 'enabled' ? true : false  // BtB
							)
				}
			},
			{
				question: [
					"Set Door Lock Configuration:",
					"Operation Type:    '####'",
					"Inside Handle 1:   '####'",
					"Inside Handle 2:   '####'",
					"Inside Handle 3:   '####'",
					"Inside Handle 4:   '####'",
					"Outside Handle 1:  '####'",
					"Outside Handle 2:  '####'",
					"Outside Handle 3:  '####'",
					"Outside Handle 4:  '####'",
					"Lock Timeout:      #### seconds", 
					"*******************************************************************" // to distinguish V1 from newer
				],
				answer: function() { lastDevice().DoorLock.ConfigurationSet(
								getParam(1) == "TimedOperation" ? 2 : 1, // mode
								(getParam(6) == 'enabled' ? 1 : 0) + (getParam(7) == 'enabled' ? 1 : 0) * 2 + (getParam(8) == 'enabled' ? 1 : 0) * 4 + (getParam(9) == 'enabled' ? 1 : 0) * 8, // outer handle
								(getParam(2) == 'enabled' ? 1 : 0) + (getParam(3) == 'enabled' ? 1 : 0) * 2 + (getParam(4) == 'enabled' ? 1 : 0) * 4 + (getParam(5) == 'enabled' ? 1 : 0) * 8, // inner handle
								decParam(10), // Lock time
								0, // AR time
								0, // H&R time
								false, // TA
								false  // BtB
							)
				}
			},
			{
				question: ["Please check if current mode is set to '####'. Is mode is displayed correctly?", "»YES-NO:SHOW«"],
				action: checkMappedParam("dev", "DoorLock.data.mode", function(v) {
					switch(v) {
						case 0: return "Unsecured";
						case 255: return "Secured";
					}
				}, 1),
				answer: yesNo
			},
			
			// CCR_MeterCC_Rev01
			{
				question: [
					"Please compare the DUTs UI to following values - are they displayed correctly?",
					"Requirement Number CL:0032.01.41.01.1",
					"'####' ####",
					"'####' ####",
					"'####' ####",
					"'####' ####",
					"»YES-NO:SHOW«"
				],
				action: function() {
					for (var i = 1; i <= getParamsCount(); i += 2) {
						if (!exec(checkScale("Meter", "scaleString", i + 1, i))) return false;
					}
					return true;
				},
				answer: yesNo
			},
			{
				question: ["Timeout for Test sequence is 5 min, waiting for following events:", "METER_RESET"],
				answer: function() { lastDevice().Meter.Reset() }
			},
			{
				question: ["Wait a moment and confirm if all meter scales has been reset on DUTs UI!", "»YES-NO:SHOW«"],
				action: waitAndExecute(5, checkAllScalesZero("Meter")), // wait for unsolicited reports
				answer: yesNo
			},
			{
				question: ["Confirm that '####' scale is set to #### in the DUTs UI!", "»YES-NO:SHOW«"],
				action: checkScale("Meter", "scaleString", 1, 2),
				answer: yesNo
			},
			{
				question: [
					"Please compare the DUTs UI to following values - are they displayed correctly?",
					"Requirement Number CL:0032.01.41.01.1",
					"'####' ####", // '1.23' kWh
					"»YES-NO:SHOW«"
				],
				action: checkScale("Meter", "scaleString", 2, 1),
				answer: yesNo
			},

			// CCR_MultilevelSwitchCC_Rev01
			{
				question: ["* SWITCH_MULTILEVEL_SET to value = '####%' (0x####) with duration 'factory default (0x####)'."],
				answer: function() { lastDevice().SwitchMultilevel.Set(byteParam(2)) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_START_LEVEL_CHANGE  with increasing brightness", "* SWITCH_COLOR_STOP_LEVEL_CHANGE" ],
				answer: function() { lastDevice().SwitchMultilevel.StartLevelChange(false, 20, false, 0); wait(1); lastDevice().SwitchMultilevel.StopLevelChange() }
				// TODO the question will be improved in future to host duration and start level
			},
			{
				question: ["Is the current level set to ####% in DUT's UI?", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "SwitchMultilevel.data.level", 1),
				answer: yes
			},

			// CCR_BinarySwitchCC_Rev01
			{
				question: ["* SWITCH_BINARY_SET with value='0x####' (####)"],
                                answer: function() { lastDevice().SwitchBinary.Set(byteParam(1)) }
			},
			{
				question: ["Please confirm if that last known state of Binary Switch is '####' (0x####)!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "SwitchBinary.data.level", 2),
				answer: yesNo
			},
			{
				question: ["Wait a moment and confirm that the state is visualized on DUTs UI according to Requirement Number CL:0025.01.51.01.1!", "»YES-NO:SHOW«"],
				answer: yes
				// TODO MK-Logic - strange question... Just approve we have a UI or should we check the last value ? It was already tested
			},

			// CCR_MultilevelSensorCC_Rev01
			{
				question: ["'####' #### (CL:0031.01.41.01.1)", "»YES-NO:SHOW«"],
				action: checkScale("SensorMultilevel", "scaleString", 2, 1),
				answer: yes
			},
			
			
			// CCR_BasicCC_Rev01
			{
				question: ["* BASIC_SET with value='0x####'", "* BASIC_GET subsequently to BASIC_SET [optional]"],
                                answer: function() { lastDevice().Basic.Set(byteParam(1)); lastDevice().Basic.Get() }
			},
			{
				question: ["Please confirm if that last known state of Basic is '####' (0x####)!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "Basic.data.level", 2),
				answer: yesNo
			},
			{
				question: ["Wait a moment and confirm that the state (####, 0x####) is visualized on DUTs UI according to Requirement Number", "CL:0020.01.43.01.1!", "»YES-NO:SHOW«"],
				action: waitAndExecute(2, checkByteParam("dev", "Basic.data.level", 2)),
				answer: yesNo
			},
			
			// CCR_ConfigurationCC_Rev01
			{
				question: ["OK Interview of CC Configuration V3 sucessfully passed"],
				answer: function() { lastDevice().Configuration.data.preferBulk = false }
				// TODO Remove this question once Cert house fixes this
			},
			{
				question: ["Set a configuration parameter value according to Requirement Number: CL:0070.01.31.02.1"],
				answer: waitInterviewDone // make sure to fetch all params info before proceeding
			},
			{
				question: ["Please set the parameter 'Param ####' with number #### to value #### using the DUT's UI!", " ", "******", "Timeout for Test sequence is 5 min, waiting for following events:", "* CONFIGURATION_SET"],
				answer: function() {
					if (lastDevice().Configuration.data.version.value < 3) {
						lastDevice().Configuration.Set(decParam(2), decParam(3), 1);
						// TODO Change it once Cert house adds the size in the description. For now 1.
					} else {
						lastDevice().Configuration.Set(decParam(2), decParam(3));
					}
				}
			},
			{
				question: ["Please try to set the parameter 'Param ####' with number #### to value #### using the DUT's UI! Is it possible to set the", "parameter value", "»YES-NO:SHOW«"],
				action: function() {
					try {
						lastDevice().Configuration.Set(decParam(2), decParam(3));
					} catch(e) {
						alert(e.toString());
						return false;
					}
					return true;
				},
				answer: yesNo
			},
			{
				question: ["Does the DUT allow to reset one particular configuration parameter?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["* CONFIGURATION_SET with reset to default for parameter number ####"],
				answer: function() { lastDevice().Configuration.SetDefault(decParam(1)) }
			},
			{
				question: [" * CONFIGURATION_DEFAULT_RESET"],
				answer: function() { lastDevice().Configuration.DefaultReset() }
			},
			{
				question: [
					"Verify that the DUT offers a UI which allows the end user to see the parameter numbers which has been set (parameter",
					"number = ####) and their current value according to Requirement Number: CL:0070.03.41.01.1",
					"----",
					"Please consult the UI of the DUT - does the DUT meet the requirement described above?",
					"»YES-NO:SHOW«"
				],
				action: function() {
					wait(2); // to make sure the previous Set command is executed and a Report is received
					try {
						if (!Number.isInteger(lastDevice().Configuration.data[getParam(1)].val.value)) return false;
						else return true;
					} catch(e) {
						alert(e.toString());
						return false;
					}
				},
				answer: yesNo
			},
			{
				question: [
					"Verify that the DUT offers a UI which allows the end user to see supported parameter numbers, their current value,",
					"their allowed value range and their default value according to Requirement Number: CL:0070.03.41.01.1",
					"----",
					"Please consult the UI of the DUT - does the DUT meet the requirement for parameter numbers ####?", // list as "1, 2, 3", to be converted using eval
					"»YES-NO:SHOW«"
				],
				action: function() {
					wait(2); // to make sure the previous Set command is executed and a Report is received
					try {
						var config_params = eval("[" + getParam(1) + "]");
						
						if (!_.isEqual(config_params, Object.keys(lastDevice().Configuration.data).map(function(x) { return parseInt(x) }).filter(Number.isInteger))) return false;
						
						for (var i = 1; i < config_params.length; i++) {
							if (
								!Number.isInteger(lastDevice().Configuration.data[config_params[i]].val.value) ||
								!Number.isInteger(lastDevice().Configuration.data[config_params[i]].min.value) ||
								!Number.isInteger(lastDevice().Configuration.data[config_params[i]].max.value) ||
								!Number.isInteger(lastDevice().Configuration.data[config_params[i]].default.value)
							) return false;
						}
						return true;
					} catch(e) {
						alert(e.toString());
						return false;
					}
				},
				answer: yesNo
			},

			// CCR_DeviceResetLocallyCC_Rev01
			{
				question: ["Please wait for the inclusion to be finished, navigate to the Z-Wave nodes list in the UI of the DUT and click 'OK' to", "reset the emulated device!"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: [
					"Please wait a moment that the reset is completly processed by the DUT.",
					"Does the DUT indicate that this node (ID = ####) has been reset and left the Z-Wave network regarding to Requirement",
					"Number CL:005A.01.51.01.1"
				],
				action: function() {
					wait(2);
					return lastDevice().DeviceResetLocally.data.reset.value;
				},
				answer: yesNo
			},			
			{
				question: ["Has the DUT removed this node (ID = 18) from its Z-Wave nodes list? (see Requirement Number CL:005A.01.52.01.1)"],
				answer: no // Z-Way does not remove devices based on DLR
			},
			
			// CCR_AssociationCC_Rev01
			{
				question: ["* ASSOCIATION_SET to add CTT controller (node ID ####) to the association group #### of the emulated Binary Switch", "device(node ID ####)"],
				answer: function() { zway.devices[decParam(3)].Association.Set(decParam(2), decParam(1)) }
			},
			
			
			// CCR_MultilevelSensorCC_Rev01
			{
				question: ["Please navigate to '####' on DUT's UI and make '####' scale visible!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Confirm that last known value of '####' in #### in the DUTs UI is '####'!", "»YES-NO:SHOW«"],
				action: checkScale("SensorMultilevel", "scaleString", 2, 3),
				answer: yesNo
			},
			
			// CCR_DiscardLowerSecurityCmds_Rev01
			{
				question: ["Sending a Basic Report #### to the DUT", "-----", "Confirm if the Current State has been set to #### referring to the DUT's UI", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "Basic.data.level", 2),
				answer: yesNo
			},

			// CCR_CentralSceneCC_Rev01
			{
				question: ["Please consult the DUT's visualisation for the emulated Wall Controller and confirm if the number of supported buttons", "or scenes is ####", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "CentralScene.data.maxScenes", 1),
				answer: yesNo
			},
			{
				question: ["Please make sure that the visualisation for the emulated Wall Controller of the DUT's UI is visible.", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Has the Scene (or Key) #### status changed ####to '####'?", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().CentralScene.data.currentScene.value === decParam(1) && lastDevice().CentralScene.data.keyAttribute.value === ccCentralSceneKeyAttribute(getParam(3));
				},	
				answer: yesNo
			},
			
			// CCR_ColorSwitchCC_Rev01
			{
				question: ["* SWITCH_COLOR_SET for color component '####' (ID = 0x####) with value='####."],
				answer: function() { lastDevice().SwitchColor.Set(byteParam(2), decParam(3)) }
			},
			{
				question: ["* SWITCH_COLOR_START_LEVEL_CHANGE for color component '####' (ID = 0x####) increasing its brightness.", "* SWITCH_COLOR_STOP_LEVEL_CHANGE for color component '####' (ID = 0x####)"],
				answer: function() { lastDevice().SwitchColor.StartStateChange(byteParam(2), false); wait(1); lastDevice().SwitchColor.StopStateChange(byteParam(4)) }
				// TODO the question will be improved in future to host duration and start level
			},
			{
				question: ["* SWITCH_BINARY_SET"],
				// Must be after SwitchBinary to match a more specific rule first
                                answer: function() { lastDevice().SwitchBinary.Set(0) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET"],
				// Must be after SwitchMultilevel to match a more specific rule first
                                answer: function() { lastDevice().SwitchMultilevel.Set(0) }
			},
			{
				question: ["Is the current level of color component '####' (ID = ####) set to #### in the DUT's UI according to Requirement Number", "CL:0033.01.42.01.1?", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().SwitchColor.data[decParam(2)].level.value === decParam(3);
				},
				answer: yes
			},
			
			// CCR_ImplementedCCVersions_Rev01
			{
				question: ["* SWITCH_BINARY_SET with any value"],
                                answer: function() { lastDevice().SwitchBinary.Set(0) }
			},
			
			// CCR_IndicatorCC_Rev01
			
			{
				question: ["* INDICATOR_SET to identify node"],
				answer: function() { lastDevice().Indicator.Identify() }
			},
			
			// CCR_MultiChannelCC_Rev01
			
			// CCR_NotificationCC_Rev01
			
			// CCR_SimpleAVCC_Rev01
			
			// CCR_SoundSwitchCC_Rev01
			{
				question: ["* Set default tone to 'Tone####'."],
				answer: function() { lastDevice().SoundSwitch.ConfigurationSet(decParam(1), 255) }
			},
			{
				question: ["* Please set volume to ####!"],
				answer: function() { lastDevice().SoundSwitch.ConfigurationSet(0, decParam(1)) }
			},
			{
				question: ["* Please mute Volume (set to 0)!"],
				answer: function() { lastDevice().SoundSwitch.ConfigurationSet(0, 0) }
			},
			{
				question: ["* Please play tone 'Tone####'!"],
				answer: function() { lastDevice().SoundSwitch.TonePlaySet(decParam(1), 0) }
			},
			{
				question: ["* Please play default tone!"],
				answer: function() { lastDevice().SoundSwitch.TonePlaySet(255, 0) }
			},
			{
				question: ["* Please stop all tones being currently played!"],
				answer: function() { lastDevice().SoundSwitch.TonePlaySet(0, 0) }
			},
			
			// Fimrware upgrade
			/*
			{
				question: ["Does Firmware 0 Sub-Version = #### (####) match the actual device?", "»YES-NO:SHOW«"],
				action: function answer: function(yes
			},
			*/
			/*
			{
				//estion: ["Does Firmware 0 Version = 0x07 (7) match the actual device?", "»YES-NO:SHOW«"],
				question: ["Does Firmware #### Version = #### (####) match the actual device?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Does Firmware #### Sub-Version = #### (####) match the actual device?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			
			// Z-Wave Plus
			/*
			{
				question: ["Does Installer Icon Type = 05 00 match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrl", ".....", 1, 2)
				answer: yesNo
			},
			*/
			{
				question: ["Does Manufacturer ID = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrl", "manufacturerId", 1, 2),
				answer: yesNo
			},
			{
				question: ["Does Product ID = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrl", "manufacturerProductId", 1, 2),
				answer: yesNo
			},
			{
				question: ["Does Product Type ID = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrl", "manufacturerProductType", 1, 2),
				answer: yesNo
			},
			
			// ThermostatMode
			{
				question: ["Confirm that last known mode of thermostat is '####' (0x####) in the DUTs UI!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "ThermostatMode.data.mode", 2),
				answer: yesNo
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'HEAT'."],
				answer: function() { lastDevice().ThermostatMode.Set(1) }
				// TODO parse HEAT -> Heat
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'MANUFACTURER_SPECIFIC' with manufacturer specific data = ####."], // "[1,2,3]" string to array using eval
				answer: function() { lastDevice().ThermostatMode.SetManufacturerSpecific(eval(getParam(1))) }
			},
			
			// ThermostatSetpoint
			{
				question: ["* THERMOSTAT_SETPOINT_SET for Setpoint Type 'Cooling' with value=#### °C"],
				answer: function() { lastDevice().ThermostatSetPoint.Set(2, decParam(1)) }
				// TODO parse Cooling
			},
			{
				question: ["* THERMOSTAT_SETPOINT_GET for Setpoint Type 'Cooling' subsequently to SETPOINT_SET"],
				answer: function() { lastDevice().ThermostatSetPoint.Get(2) }
				// TODO parse Cooling
			},
			{
				question: [
					"Please set the Setpoint for type 'FullPower' to #### °C",
					"-----------------------------------------------------------------------",
					"Has the Setpoint been set sucessfully?",
					"»YES-NO:SHOW«"
				],
				action:	checkScale("ThermostatSetPoint", "modeName", "Full Power", 1),
				answer: yesNo
				// TODO parse FullPower -> Full Power
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'HEAT'."],
				answer: function() { lastDevice().ThermostatMode.Set(1) }
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'MANUFACTURER_SPECIFIC' with manufacturer specific data = ####."], // "[1,2,3]" string to array using eval
				answer: function() { lastDevice().ThermostatMode.SetManufacturerSpecific(eval(getParam(1))) }
			},
		]
	}
}

function ZWayCTTAutoTestIgnoreQ() {
	return iq = [
		"Done SendDataEx: Data="
	]
	
}