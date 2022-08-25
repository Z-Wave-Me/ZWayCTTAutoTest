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
				question: ["Inclusion and interview passed, click OK to continue with testing minimum user and additional control requirements.", "»OK:SHOW«"],
				action: waitInterviewDone, // to make sure interview is done and LL is set
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click OK to continue with testing minimum user requirements.", "»OK:SHOW«"],
				action: waitInterviewDone, // to make sure interview is done and LL is set
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
				question: ["Please wait for the interview to be finished and continue with clicking 'OK'!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click 'OK' to continue with testing minimum user requirements."],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please make sure that the current state of the emulated #### device is visible on the DUT's UI and confirm to", "start the test sequence!"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Please make sure that the current state of the emulated #### device is visible on the DUT's UI and confirm to start", "the test sequence!"],
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
						if (!checkScale("Meter", getParam(i + 1), floatParam(i))) return false;
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
				action: function() {
					wait(null, 5); // wait for unsolicited reports
					return checkAllScalesZero("Meter")
				},
				answer: yesNo
			},
			{
				question: ["Confirm that '####' scale is set to #### in the DUTs UI!", "»YES-NO:SHOW«"],
				action: function() {
					return checkScale("Meter", getParam(1), floatParam(2));
				},
				answer: yesNo
			},
			{
				question: [
					"Please compare the DUTs UI to following values - are they displayed correctly?",
					"Requirement Number CL:0032.01.41.01.1",
					"'####' ####", // '1.23' kWh
					"»YES-NO:SHOW«"
				],
				action: function() { 
					return checkScale("Meter", getParam(2), floatParam(1));
				},
				answer: yesNo
			},

			// CCR_MultilevelSwitchCC_Rev01
			{
				question: ["* SWITCH_MULTILEVEL_SET to value = '####%' (0x####) with duration 'factory default (0x####)'."],
				answer: function() { lastDevice().SwitchMultilevel.Set(byteParam(2)) }
			},
			{
				question: [" * SWITCH_MULTILEVEL_START_LEVEL_CHANGE  with increasing brightness", "* SWITCH_COLOR_STOP_LEVEL_CHANGE" ],
				answer: function() { lastDevice().SwitchMultilevel.StartLevelChange(false, 0xFF, false, 0); wait(null, 1); lastDevice().SwitchMultilevel.StopLevelChange() }
			},
			{
				question: ["Is the current level set to ####% in DUT's UI?", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "SwitchMultilevel.data.level", 1),
				answer: yes
			},

			// CCR_BinarySwitchCC_Rev01
			{
				question: ["Please confirm if that last known state of Binary Switch is '####' (0x####)!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "SwitchBinary.data.level", 2),
				answer: yesNo
			},

			// CCR_MultilevelSensorCC_Rev01
			{
				question: ["'1230.0' ppm (CL:0031.01.41.01.1)", "»YES-NO:SHOW«"],
				action: function() { 
					return checkScale("SensorMultilevel", floatParam(2), getParam(1));
				},
				answer: yes
			},
			/*
			{
				question: ["Please navigate to 'AirTemperature' on DUT's UI and make '°C' scale visible!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["'2014.00' with unkown scale (CL:0031.01.41.02.1)", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["'20.14' °C (CL:0031.01.41.01.1)", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["'42' seconds (CL:0031.01.41.01.1)", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Are the hardware and software of the product certified?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["CL:0020.01.43.01.1!", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["CL:0033.01.42.01.1?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/


			/*
			{
				question: ["Confirm that last known value of 'AirTemperature' in °C in the DUTs UI is '####'!", "»YES-NO:SHOW«"],
				answer: yesNo
			},
			*/
			/*
			{
				question: ["Confirm if the Current State has been set to #### referring to the DUT's UI!", "»YES-NO:SHOW«"],
				answer: yesNo
			},
			*/
			
			// Fimrware pgrade
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
				action: checkByteParam("dev", "Thermostat.data.mode", 2),
				answer: yesNo
			},

			// TODO
			/*
			{
				question: ["Is it possible to activate this Device Type in the DUT?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Requirement Number CL:0033.01.51.01.1 Retry?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Wait a moment and confirm that the state is visualized on DUTs UI according to Requirement Number CL:0025.01.51.01.1!", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
		]
	}
}
