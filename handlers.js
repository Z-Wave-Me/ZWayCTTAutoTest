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
				question: ["Does the DUT implement an UI which allows the end user to establish association between nodes?", "»YES-NO:SHOW«"],
				answer: yes
			},
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
			{
				question: ["Is the DUT capable to display the last known state of the emulated end node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is the DUT able to display the last known state of the emulated end node?", "»YES-NO:SHOW«"],
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
				question: ["Please wait that the Inclusion has finished, make sure that the DUT has completed the Association and AGI interview and", "proceed by clicking 'OK'.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait that the Inclusion has finished and proceed by clicking 'OK'.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please wait for the interview to be finished before clicking 'OK'!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Click 'OK' as soon as the Inclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone, // or we are secondary?
				answer: ok
			},
			{
				question: ["Wait until the DUT is ready!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Wait until the Inclusion process has finished or abort it on DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Click 'OK' as soon as the Inclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please reset the DUT and confirm or start Exclusion of the DUT!", "Removing node..."],
				action: startLearnMode
			},
			{
				question: ["Wait for activating Learn Mode on DUT..."],
				action: startLearnMode
			},
			{
				question: ["Click 'OK' to start inclusion of the DUT!", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Set DUT in learn mode and click 'OK' to continue", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Click 'OK' to start Exclusion of the DUT!", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Please reset the DUT, start Add Mode and confirm these steps..."],
				action: resetAndStartInclusion
			},
			{
				question: ["Please reset the DUT."],
				action: reset
			},
			{
				question: ["Reset the DUT!", "»OK:SHOW«"],
				action: reset
			},
			{
				question: ["Do you want to exclude the DUT? If 'No' is clicked, reset the DUT before the following steps!"],
				action: reset,
				answer: no
			},
			{
				question: ["Please click 'OK' and trigger a capability discovery for node #### using the DUT's UI!", "»OK:SHOW«"],
				action: forceInterview,
				answer: ok
			},
			{
				question: ["Include the CTT End Device into the DUT network ...", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Include the #### Device #### of #### into the DUT network ...", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click 'OK' to continue with testing additional control requirements.", "»OK:SHOW«"],
				answer: ok
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
				action: function() { lastDevice().BarrierOperator.Set(byteParam(1)) }
			},
			{
				question: ["BARRIER_OPERATOR_SIGNAL_SET with target value='0x####' (####) for Subsytem 'AudibleNotification'"],
				action: function() { lastDevice().BarrierOperator.SignalSet(1, byteParam(1)) }
			},
			{
				question: ["BARRIER_OPERATOR_SIGNAL_SET with target value='0x####' (####) for Subsytem 'VisualNotification'"],
				action: function() { lastDevice().BarrierOperator.SignalSet(2, byteParam(1)) }
			},
			
			// CCR_DoorLockCC_Rev01
			{
				question: ["Set Door Lock Operation Mode UnsecuredWithTimeout"],
				action: function() { lastDevice().DoorLock.Set(1) }
			},
			{
				question: ["Set Door Lock Operation Mode Unsecured"],
				action: function() { lastDevice().DoorLock.Set(0) }
			},
			{
				question: ["Set Door Lock Operation Mode Secured"],
				action: function() { lastDevice().DoorLock.Set(255) }
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
				action: function() { lastDevice().DoorLock.ConfigurationSet(
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
				action: function() { lastDevice().DoorLock.ConfigurationSet(
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
				action: function() { lastDevice().Meter.Reset() }
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
				question: ["Please make sure that the current state of the emulated Meter device (scale = '####') is visible on the DUT's UI and", "confirm to start the test sequence!", "»OK:SHOW«"],
				answer: ok
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
				action: function() { lastDevice().SwitchMultilevel.Set(byteParam(2)) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET to Z-Wave value = '####' (0x####), i.e. hardware level = '####%', with duration 'factory default", "(0x####)'"],
				action: function() { lastDevice().SwitchMultilevel.Set(byteParam(2)) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_START_LEVEL_CHANGE  with increasing brightness", "* SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE" ],
				action: function() { lastDevice().SwitchMultilevel.StartLevelChange(false, 20, false, 5); wait(1); lastDevice().SwitchMultilevel.StopLevelChange() }
				// TODO the question will be improved in future to host duration and start level
			},
			{
				question: ["Is the current level set to ####% in DUT's UI?", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "SwitchMultilevel.data.level", 1),
				answer: yes
			},
			{
				question: ["Please confirm that last known state of Multilevel Switch is Z-Wave value = '####' (0x####), i.e. hardware level = '####%'!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "SwitchMultilevel.data.level", 2),
				answer: yes
			},
			{
				question: ["Is the DUT able to send a Start/Stop Level Change to the emulated end node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is the current level set to ####% in DUT's UI?", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "SwitchMultilevel.data.level", 1),
				answer: yes
			},
			{
				question: ["Please make sure that the current state of the emulated Multilevel Switch device is visible on the DUT's UI and confirm", "to start the test sequence!", "»OK:SHOW«"],
				answer: ok
			},

			// CCR_BinarySwitchCC_Rev01
			{
				question: ["* SWITCH_BINARY_SET with value='0x####' (####)"],
                                action: function() { lastDevice().SwitchBinary.Set(byteParam(1)) }
			},
			{
				question: ["Please confirm if that last known state of Binary Switch is '####' (0x####)!", "»YES-NO:SHOW«"],
				action: checkMappedParam("dev", "SwitchBinary.data.level", function(v) { return v ? 'FF' : '00' }, 2),
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
                                action: function() { lastDevice().Basic.Set(byteParam(1)); lastDevice().Basic.Get() }
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
				action: function() { lastDevice().Configuration.data.preferBulk = false }
				// TODO Remove this question once Cert house fixes this
			},
			{
				question: ["Set a configuration parameter value according to Requirement Number: CL:0070.01.31.02.1"],
				answer: waitInterviewDone // make sure to fetch all params info before proceeding
			},
			{
				question: ["Please set the parameter 'Param ####' with number #### to value #### using the DUT's UI!", "******", "Timeout for Test sequence is 5 min, waiting for following events:", "* CONFIGURATION_SET"],
				action: function() {
					if (lastDevice().Configuration.data.version.value < 3) {
						lastDevice().Configuration.Set(decParam(2), decParam(3), 1);
						// TODO Change it once Cert house adds the size in the description. For now 1.
					} else {
						lastDevice().Configuration.data.preferBulk = false;
						// TODO Remove this question once Cert house fixes this ^^^
						lastDevice().Configuration.Set(decParam(2), decParam(3));
					}
				}
			},
			{
				question: ["Please set the parameter 'Param ####' with number #### to value #### using the DUT's UI!", "******", "Timeout for Test sequence is 5 min, waiting for following events:", "* CONFIGURATION_BULK_SET"],
				action: function() {
					lastDevice().Configuration.data.preferBulk = true;
					// TODO Remove this question once Cert house fixes this ^^^
					lastDevice().Configuration.Set(decParam(2), decParam(3));
				}
			},
			{
				question: ["Please try to set the parameter 'Param ####' with number #### to value #### using the DUT's UI! Is it possible to set the", "parameter value", "»YES-NO:SHOW«"],
				action: function() {
					try {
						lastDevice().Configuration.Set(decParam(2), decParam(3));
					} catch(e) {
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
				action: function() {
					lastDevice().Configuration.data.preferBulk = false;
					// TODO Remove this question once Cert house fixes this ^^^
					lastDevice().Configuration.SetDefault(decParam(1));
				}
			},
			{
				question: [" * CONFIGURATION_DEFAULT_RESET"],
				action: function() { lastDevice().Configuration.DefaultReset() }
			},
			{
				question: [
					"Verify that the DUT offers a UI which allows the end user to see the parameter numbers which has been set (parameter",
					"number = ####) and their current value according to Requirement Number: CL:0070.03.41.01.1",
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
				action: function() { zway.devices[decParam(3)].Association.Set(decParam(2), decParam(1)) }
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
				question: ["Sending a Basic Report #### to the DUT", "Confirm if the Current State has been set to #### referring to the DUT's UI", "»YES-NO:SHOW«"],
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
				action: function() { lastDevice().SwitchColor.Set(byteParam(2), decParam(3)) }
			},
			{
				question: ["* SWITCH_COLOR_START_LEVEL_CHANGE for color component '####' (ID = 0x####) increasing its brightness.", "* SWITCH_COLOR_STOP_LEVEL_CHANGE for color component '####' (ID = 0x####)"],
				action: function() { lastDevice().SwitchColor.StartStateChange(byteParam(2), false); wait(1); lastDevice().SwitchColor.StopStateChange(byteParam(4)) }
				// TODO the question will be improved in future to host duration and start level
			},
			/* Not needed in Rev02?
			{
				question: ["* SWITCH_BINARY_SET"],
				// Must be after SwitchBinary to match a more specific rule first
                                action: function() { lastDevice().SwitchBinary.Set(0) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET"],
				// Must be after SwitchMultilevel to match a more specific rule first
                                action: function() { lastDevice().SwitchMultilevel.Set(0) }
			},
			*/
			{
				question: ["Is the current level of color component '####' (ID = ####) set to #### in the DUT's UI according to Requirement Number", "CL:0033.01.42.01.1?", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().SwitchColor.data[decParam(2)].level.value === decParam(3);
				},
				answer: yes
			},
			{
				question: ["Please make sure that the current state of the emulated Color Switch device is visible on the DUT's UI and confirm to", "start the test sequence!", "»YES-NO:SHOW«"],
				answer: yes
			},
			
			// CCR_ImplementedCCVersions_Rev01
			{
				question: ["* SWITCH_BINARY_SET with any value"],
                                action: function() { lastDevice().SwitchBinary.Set(0) }
			},
			
			// CCR_IndicatorCC_Rev01
			{
				question: ["* INDICATOR_SET to identify node"],
				action: function() { lastDevice().Indicator.Identify() }
			},
			
			// CDR_ZWPv2IndicatorCCRequirements_Rev01
			{
				question: ["The Identify indicator function of the DUT will now be triggered. Click 'OK' to continue and observe the DUT!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Did the Identify indicator on the DUT blink five times?", "»YES-NO:SHOW«"],
				action: function() {
					return
						dev("ctrldev").value("Indicator.data[80][3].state") == 10 &&
						dev("ctrldev").value("Indicator.data[80][4].state") == 5 &&
						dev("ctrldev").value("Indicator.data[80][5].state") == 5;
				}
			},
			
			// CCR_MultiChannelCC_Rev01
			
			// CCR_UsercodeCC_Rev02
			{
				question: ["* Set User Code ID #### to '####' with code '####'!"],
                                action: function() {
                                	var mode;
                                	switch(getParam(2)) {
                                		case "Disabled":
                                			mode = 0;
                                			break;
                                		case "Occupied":
                                		case "Enabled / Grant Access":
                                			mode = 1;
                                			break;
						case "Reserved":
							mode = 2;
							break;
						case "MessagingMode":
							mode = 3;
							break;
						case "PassageMode":
							mode = 4;
							break;
						default:
							alert()
							return;
                                	}
                                	lastDevice().UserCode.Set(decParam(1), getParam(3), mode);
				}
			},
			{
				question: ["* Erase User Code ID ####"],
                                action: function() { lastDevice().UserCode.Set(decParam(1), '', 0) }
			},
			{
				question: ["* Set Keypad mode to Vacation."],
                                action: function() {
                                	var mode;
                                	switch(getParam(1)) {
                                		case "Normal":
                                			mode = 0;
                                			break;
                                		case "Vacation":
                                			mode = 1;
                                			break;
						case "Privacy":
							mode = 2;
							break;
						case "Locked out":
							mode = 3;
							break;
						default:
							alert()
							return;
                                	}
                                	lastDevice().UserCode.KeypadModeSet(mode);
				}
			},
			{
				question: ["* Set Master Code to '####'"],
                                action: function() { lastDevice().UserCode.MasterCodeSet(getParam(1)) }
			},
			{
				question: ["* Disable Master Code."],
                                action: function() { lastDevice().UserCode.MasterCodeSet("") }
			},
			
			// CCR_NotificationCC_Rev01
			{
				question: ["* NOTIFICATION_GET (ALARM_GET) for Notification Type 0x####"],
                                action: function() { lastDevice().Alarm.Get(byteParam(1)) }
			},
			
			// CCR_SimpleAVCC_Rev01
			{
				question: ["* SIMPLE_AV_CONTROL_SET with AV command '####' (0x####)"],
                                action: function() { lastDevice().SimpleAV.Set(byteParam(2)) }
			},
			
			// CCR_SoundSwitchCC_Rev01
			{
				question: ["* Set default tone to 'Tone####'."],
				action: function() { lastDevice().SoundSwitch.ConfigurationSet(decParam(1), 255) }
			},
			{
				question: ["* Please set volume to ####!"],
				action: function() { lastDevice().SoundSwitch.ConfigurationSet(0, decParam(1)) }
			},
			{
				question: ["* Please mute Volume (set to 0)!"],
				action: function() { lastDevice().SoundSwitch.ConfigurationSet(0, 0) }
			},
			{
				question: ["* Please play tone 'Tone####'!"],
				action: function() { lastDevice().SoundSwitch.TonePlaySet(decParam(1), 0) }
			},
			{
				question: ["* Please play default tone!"],
				action: function() { lastDevice().SoundSwitch.TonePlaySet(255, 0) }
			},
			{
				question: ["* Please stop all tones being currently played!"],
				action: function() { lastDevice().SoundSwitch.TonePlaySet(0, 0) }
			},
			
			// CDR_ZWavePlusCC_Rev01
			{
				question: ["Does User Icon Type = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrldev", "data.userIcon", 1, 2),
				answer: yesNo
			},
			{
				question: ["Does Installer Icon Type = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrldev", "data.installerIcon", 1, 2),
				answer: yesNo
			},
			{
				question: ["Does Manufacturer ID = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrldev", "data.manufacturerId", 1, 2),
				answer: yesNo
			},
			{
				question: ["Does Product ID = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrldev", "data.manufacturerProductId", 1, 2),
				answer: yesNo
			},
			{
				question: ["Does Product Type ID = #### #### match the actual device?", "»YES-NO:SHOW«"],
				action: checkWordParam("ctrldev", "data.manufacturerProductType", 1, 2),
				answer: yesNo
			},
			
			// DD_VersionCCData_Rev01
			{
				question: ["Does Firmware 0 Version = 0x#### (####) match the actual device?", "»YES-NO:SHOW«"],
				action: checkByteParam("ctrl", "data.APIVersionMajor", 1),
				answer: yesNo
			},
			{
				question: ["Does Firmware 0 Sub-Version = 0x#### (####) match the actual device?", "»YES-NO:SHOW«"],
				action: checkByteParam("ctrl", "data.APIVersionMinor", 1),
				answer: yesNo
			},
			{
				question: ["Does Firmware 1 Version = 0x#### (####) match the actual device?", "»YES-NO:SHOW«"],
				action: checkByteParam("ctrldev", "data.applicationMajor", 1),
				answer: yesNo
			},
			{
				question: ["Does Firmware 1 Sub-Version = 0x#### (####) match the actual device?", "»YES-NO:SHOW«"],
				action: checkByteParam("ctrldev", "data.applicationMinor", 1),
				answer: yesNo
			},
			
			// CDR_ThermostatModeCC_Rev01
			{
				question: ["Confirm that last known mode of thermostat is '####' (0x####) in the DUTs UI!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "ThermostatMode.data.mode", 2),
				answer: yesNo
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'HEAT'."],
				action: function() { lastDevice().ThermostatMode.Set(1) }
				// TODO parse HEAT -> Heat
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'MANUFACTURER_SPECIFIC' with manufacturer specific data = ####."], // "[1,2,3]" string to array using eval
				action: function() { lastDevice().ThermostatMode.SetManufacturerSpecific(eval(getParam(1))) }
			},
			
			// ThermostatSetpoint
			{
				question: ["* THERMOSTAT_SETPOINT_SET for Setpoint Type 'Cooling' with value=#### °C"],
				action: function() { lastDevice().ThermostatSetPoint.Set(2, decParam(1)) }
				// TODO parse Cooling
			},
			{
				question: ["* THERMOSTAT_SETPOINT_GET for Setpoint Type 'Cooling' subsequently to SETPOINT_SET"],
				action: function() { lastDevice().ThermostatSetPoint.Get(2) }
				// TODO parse Cooling
			},
			{
				question: [
					"Please set the Setpoint for type 'FullPower' to #### °C",
					"Has the Setpoint been set sucessfully?",
					"»YES-NO:SHOW«"
				],
				action:	function() {
					try {
						lastDevice().ThermostatSetPoint.Set(15, decParam(1));
					} catch(e) {
						return false;
					}
					return true;
				},
				answer: yesNo
				// TODO parse FullPower -> Full Power
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'HEAT'."],
				action: function() { lastDevice().ThermostatMode.Set(1) }
			},
			{
				question: ["* THERMOSTAT_MODE_SET to mode = 'MANUFACTURER_SPECIFIC' with manufacturer specific data = ####."], // "[1,2,3]" string to array using eval
				action: function() { lastDevice().ThermostatMode.SetManufacturerSpecific(eval(getParam(1))) }
			},
			
			// S2C_02010_S2NonceGetAndReport_Rev01
			{
				question: ["Prepare the DUT to send any S2 encapsulated command to the CTT End Device (Node ID = ####) ..."],
				answer: ok
			},
			{
				question: ["Click 'OK' and send any S2 encapsulated command from DUT to CTT End Device (Node ID = ####)!"],
				action: function() {
					setTimeout(function() {
						lastDevice().Basic.Get()
					}, 1000);
				},
				answer: ok
			},
			
			// CCR_MultiChannelAssociationCC_Rev02
			{
				question: ["* Multichannel Association Set to add End Point #### of node #### to Group Id = #### of node ####."],
				action: function() { lastDevice().MultiChannelAssociation.Set(decParam(3), decParam(2), decParam(1)) }
			},
			{
				question: ["Try to add End Point #### of node #### to Association group '####' (Group Id = ####) of node ####"],
				action: function() { lastDevice().MultiChannelAssociation.Set(decParam(4), decParam(2), decParam(1)) }
			},
			{
				question: ["Does the DUT's UI allow to set the Association as described above?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["* Multi Channel Association Remove to remove End Point #### of node #### from Group Id = #### of node ####."],
				action: function() { lastDevice().MultiChannelAssociation.Set(decParam(3), decParam(2), decParam(1)) }
			},
			{
				question: ["Please wait that the Inclusion has finished, make sure that the DUT has completed the Association and AGI interview and", "proceed by clicking 'OK'"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Do you want to exclude the DUT? If 'No' is clicked, reset the DUT before the following steps!", "»YES-NO:SHOW«"],
				action: waitInterviewDone,
				answer: no
			},
			
			// CDR_NIFRequirements_Rev01
			{
				question: ["Click 'OK' when the NIF has been triggered!", "»OK:SHOW«"],
				action: function() { zway.controller.SendNodeInformation() },
				answer: ok
			},
			{
				question: ["Is it possible to trigger a Broadcast Node Information Frame from the DUT?", "»YES-NO:SHOW«"],
				answer: yes
			},
		]
	}
}

function ZWayCTTAutoTestIgnoreQ() {
	return iq = [
		"---------------------",
		"Done SendDataEx: Data="
	]
	
}