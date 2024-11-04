function ZWayCTTAutoTestQA(helpers) {
	with(helpers) {
		return qa = [
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
			{
				question: ["Product Name:", "####", "Is this correct?", "»YES-NO:SHOW«"],
				// change #### with the name
				// don't check the real name right now as it is only in the Cert form and Z-Way does not know it
				answer: yes
			},
			{
				question: ["Does the DUT's UI allow to set a dimming 'Duration' for 'Setting the Level'?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is the DUT capable to display the last known state of the emulated end node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT's UI allow to set a dimming 'Duration' for 'Start Level Change'?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT's UI allow to set a 'Start Level' for 'Start Level Change'?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				// Always say we pass. Check it manually!
				question: ["Make sure the DUT actually contols the Command Class and does not violate any requirment! In particular consider the", "Command Classes specifications!", "Is #### actually controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT control any further Command Classes which are not listed / identified in the Form?", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["Before continuing this Test Case it is recommended to already make sure that the DUT actually contols the Command", "Classes and does not violate any requirement! In particular consider the Command Classes specifications!", "Do you want to continue?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Are all of them correctly documented as controlled?", "»YES-NO:SHOW«"],
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

			// Common questions
			{
				question: ["Activate the Add mode in the UI of the DUT and click 'OK' to start Inclusion by the DUT!", "»OK:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Activate the Add Mode in the UI of the DUT. Click 'OK' when the Add Mode is active.", "»OK-CANCEL:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Set DUT into Add Mode!", "(Cancel to skip the step. However, this would fail the Test Case result.)", "»OK-CANCEL:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Set DUT into Add Mode!", "»OK:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Set DUT into Add Mode and click 'OK'", "»OK:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Set DUT into Add Mode and click 'OK'", "(Cancel to skip the step. However, this would fail the Test Case result.)", "»OK-CANCEL:SHOW«"],
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
				question: [" Click 'OK' as soon as the inclusion and interview process has been finished on the DUT side", "»OK:SHOW«"],
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
				question: ["Ready for Inclusion of CTT Controller ####?", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Ready to start inclusion?", "»OK:SHOW«"],
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
				action: isDevicePresent(1),
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
				question: ["Please wait for the interview to be finished and visit the Basic Command Class visualisation for node #### in the DUT's UI!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Click 'OK' as soon as the Inclusion process has been finished on the DUT side.", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Please wait until the DUT is ready and click 'OK'", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Wait until DUT is ready and click 'OK'.", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' to start the Command Class response tests or Cancel to skip to the next test cycle!", "Note: Skipping test cycles will fail this Test Case!", "»OK-CANCEL:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' to continue with #### as the highest security class", "or click 'Cancel' to skip to the next lower security class!", "Note: Skipping Inclusions will fail this Test Case!", "»OK-CANCEL:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' to continue with ####", "or click 'Cancel' to skip to the next lower security class!", "Note: Skipping Inclusions will fail this Test Case!", "»OK-CANCEL:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' to continue with #### as the highest security class", "or click 'Cancel' to end the Test Case!", "Note: Skipping Inclusions will fail this Test Case!", "»OK-CANCEL:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Ready for Inclusion?", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["In DUT (SIS) UI accept all security schemes and type the DSK PIN when the input dialog is prompted! Ready for Inclusion?", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' as soon as the Exclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' as soon as the Inclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone, // or we are secondary?
				answer: ok
			},
			{
				question: ["Wait until the DUT is ready!", "»OK:SHOW«"],
				action: waitInterviewDoneOrIdle,
				answer: ok
			},
			{
				question: ["Wait until the Inclusion process has finished or abort it on DUT side!", "»OK:SHOW«"],
				action: waitInterviewDoneOrIdle,
				answer: ok
			},
			{
				question: ["Click 'OK' as soon as the Inclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Wait until Inclusion process is done!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Set the DUT into Add Mode and click 'OK'", "»OK:SHOW«"],
				action: startInclusion,
				answer: ok
			},
			{
				question: ["Stop Add Mode on DUT and click 'OK'", "»OK:SHOW«"],
				action: stopInclusion,
				answer: ok
			},
			{
				question: ["Has the End Device #### been included sucessfully and is there NO request to start an exclusion of that End Device?", "»YES-NO:SHOW«"],
				action: isDevicePresent(1),
				answer: yesNo
			},
			{
				question: ["Has the End Device #### been placed in a special section?", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["DUT UI Verification", "Is the CTT End Device removed from DUT's device list?", "»YES-NO:SHOW«"],
				action: !isDevicePresent(),
				answer: yesNo
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
				question: ["Set DUT into Learn Mode!", "(Cancel to skip the step. However, this would fail the Test Case result.)", "»OK-CANCEL:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Set DUT into Learn Mode!", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Set DUT in learn mode and click 'OK' to continue", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Set DUT in learn mode and click 'OK' to continue", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Set DUT into Learn Mode and click 'OK'", "»OK:SHOW«"],
				action: startLearnMode,
				answer: ok
			},
			{
				question: ["Set DUT into Learn Mode and click 'OK'", "(Cancel to skip the step. However, this would fail the Test Case result.)", "»OK-CANCEL:SHOW«"],
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
				question: ["Please reset the DUT, start Add Mode and confirm these steps!"],
				action: resetAndStartInclusion
			},
			{
				question: ["Please reset the DUT.", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Reset DUT!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Please reset the DUT and click 'OK'.", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Is the Learn Mode accessible in the DUT's UI?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Reset the DUT!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Does the DUT support Learn Mode?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Please reset the DUT and confirm with clicking 'OK' when ready!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Do you want to exclude the DUT? If 'No' is clicked, reset the DUT before the following steps!", "»YES-NO:SHOW«"],
				action: reset,
				answer: no
			},
			{
				question: ["Refer to the DUT's documentation and perform a factory reset as stated! Click 'OK' after the factory reset has been", "completed!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Make sure the DUT has been reset before continuing!", "»OK:SHOW«"],
				action: reset,
				answer: ok
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
			{
				question: ["Ready for inclusion of CTT Controller by the DUT?", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["PIN Code: ####"],
				action: function() {
					prepareS2(decParam(1))
				}
			},

			// DSK requirements
			{
				question: ["When a SmartStart including controller has received the DSK of a node for inclusion, it shall keep NWI Mode enabled for", "at least 'nwkMinNWIModeSmartStartDuration' minutes if the node does not get included.", "nwkMinNWIModeSmartStartDuration = 60 (minutes): Minimum duration in which NWI mode shall stay enabled after a", "controller node has received a SmartStart DSK to include.", "Requirement numbers: NWK:01B7.1, NWK:0177.1", "This test takes at least 65 minutes.", "Click 'OK' to continue or 'Cancel' to skip the test!", "»OK-CANCEL:SHOW«"],
				answer: cancel
			},
			{
				question: ["Please add #### DSK to the DUT's Node Provisioning List:", "####", "»OK:SHOW«"],
				action: function() {
					zway.controller.data.smartStart.dskProvisioningList = zway.controller.data.smartStart.dskProvisioningList.value.concat([getParam(2)]);
				},
				answer: ok
			},
			{
				question: ["Please add #### DSK to the DUT's Node Provisioning List and click 'OK'!", "####", "»OK:SHOW«"],
				action: function() {
					zway.controller.data.smartStart.dskProvisioningList = zway.controller.data.smartStart.dskProvisioningList.value.concat([getParam(2)]);
				},
				answer: ok
			},
			{
				question: ["Please remove both entries from the Node Provisioning List and click 'OK'.", "»OK:SHOW«"],
				action: function() {
					zway.controller.data.smartStart.dskProvisioningList = [];
				},
				answer: ok
			},
			{
				question: ["Please remove the DSK of the CTT End Device from the DUT's Node Provisioning List and click 'OK'.", "»OK:SHOW«"],
				action: function() {
					zway.controller.data.smartStart.dskProvisioningList = [];
				},
				answer: ok
			},
			{
				question: ["Please remove the Switch On/Off from the Node Provisioning List and click 'OK'.", "»OK:SHOW«"],
				action: function() {
					zway.controller.data.smartStart.dskProvisioningList = [];
				},
				answer: ok
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
			{
				question: ["Optional: Is the DUT capable to activate and deactivate the 'Audible Notification' subsystem of supporting end nodes?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Optional: Is the DUT capable to activate and deactivate the 'Visual Notification' subsystem of supporting end nodes?", "»YES-NO:SHOW«"],
				answer: yes
			},
			
			// CCR_DoorLockCC_Rev01 & Rev02
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
				question: ["Please check if current mode is set to '####'. Is####mode displayed correctly?", "»YES-NO:SHOW«"],
				action: checkMappedParam("dev", "DoorLock.data.mode", function(v) {
					switch(v) {
						case 0: return "Unsecured";
						case 1: return "UnsecuredWithTimeout";
						case 255: return "Secured";
					}
				}, 1),
				answer: yesNo
			},
			{
				question: ["Does the DUT allow the user to configure the door handles of a v4 supporting end node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT allow the user to configure the door handles of a v1 supporting end node?", "»YES-NO:SHOW«"],
				answer: yes
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

			// CCR_MultilevelSwitchCC_Rev01 & Rev02
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
				question: ["* SWITCH_MULTILEVEL_SET:", "* Z-Wave Value = #### (0x####), i. e. hardware level = ####", "* Duration     = #### seconds"],
				action: function() { lastDevice().SwitchMultilevel.Set(byteParam(2), decParam(4)) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET:", "* Z-Wave Value = #### (0x####), i. e. hardware level = ####", "* Duration     = #### minutes"],
				action: function() { lastDevice().SwitchMultilevel.Set(byteParam(2), decParam(4) - 1 + 128) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET:", "* Z-Wave Value = #### (0x####), i. e. hardware level = ####", "* Duration     = #### (0x####)"],
				action: function() { lastDevice().SwitchMultilevel.Set(byteParam(2), byteParam(5)) }
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET:", "* Z-Wave Value = #### (0x####), i. e. hardware level = ####", "****"],
				action: function() { lastDevice().SwitchMultilevel.Set(byteParam(2)) }
			},
			{
				question: [
					"Testing optional level change:",
					"* Direction   = ####",
					"* Start Level = #### (0x####), i. e. hardware level = ####%",
					"* Duration    = #### seconds",
					"1.  Click 'OK' to start test sequence!",
					"2.  Start level change ####(with #### brightness) and wait a little moment.", // TODO: space included in #### due to a non-printable char in CTT. Fix it once CTT is fixed
					"3.  Stop level change.",
					"»OK:SHOW«"
				],
				action: function() {
					send(ok)
					wait(1)
					lastDevice().SwitchMultilevel.StartLevelChange(getParam(1) == "up" ? 0 : 1, decParam(5), false, byteParam(3))
					wait(1)
					lastDevice().SwitchMultilevel.StopLevelChange()
				}
			},
			{
				question: [
					"Testing optional level change:",
					"* Direction   = ####",
					"* Start Level = ignore",
					"* Duration    = #### (0x####)",
					"1.  Click 'OK' to start test sequence!",
					"2.  Start level change ####(with #### brightness) and wait a little moment.", // TODO: space included in #### due to a non-printable char in CTT. Fix it once CTT is fixed
					"3.  Stop level change.",
					"»OK:SHOW«"
				],
				action: function() {
					send(ok)
					wait(1)
					lastDevice().SwitchMultilevel.StartLevelChange(getParam(1) == "up" ? 0 : 1, byteParam(3))
					wait(1)
					lastDevice().SwitchMultilevel.StopLevelChange()
				}
			},
			{
				question: [
					"Testing optional level change:",
					"* Direction   = ####",
					"* Start Level = #### (0x####), i. e. hardware level = ####%",
					"1.  Click 'OK' to start test sequence!",
					"2.  Start level change ####(with #### brightness) and wait a little moment.", // TODO: space included in #### due to a non-printable char in CTT. Fix it once CTT is fixed
					"3.  Stop level change.",
					"»OK:SHOW«"
				],
				action: function() {
					send(ok)
					wait(1)
					lastDevice().SwitchMultilevel.StartLevelChange(getParam(1) == "up" ? 0 : 1, 0xFF, false, byteParam(3))
					wait(1)
					lastDevice().SwitchMultilevel.StopLevelChange()
				}
			},
			{
				question: [
					"Testing optional level change:",
					"* Direction   = ####",
					"* Start Level = ignore",
					"1.  Click 'OK' to start test sequence!",
					"2.  Start level change ####(with #### brightness) and wait a little moment.", // TODO: space included in #### due to a non-printable char in CTT. Fix it once CTT is fixed
					"3.  Stop level change.",
					"»OK:SHOW«"
				],
				action: function() {
					send(ok)
					wait(1)
					lastDevice().SwitchMultilevel.StartLevelChange(getParam(1) == "up" ? 0 : 1)
					wait(1)
					lastDevice().SwitchMultilevel.StopLevelChange()
				},
				answer: ok
			},
			{
				question: [
					"Testing optional level change:",
					"* Direction   = ####",
					"* Start Level = ignore",
					"* Duration    = #### seconds",
					"1.  Click 'OK' to start test sequence!",
					"2.  Start level change #### (with #### brightness) and wait a little moment.",
					"3.  Stop level change.",
					"»OK:SHOW«"
				],
				action: function() {
					send(ok)
					wait(1)
					lastDevice().SwitchMultilevel.StartLevelChange(getParam(1) == "up" ? 0 : 1, decParam(2))
					wait(1)
					lastDevice().SwitchMultilevel.StopLevelChange()
				},
				answer: ok
			},
			{
				question: ["Please make sure that the current state of the emulated Multilevel Switch device is visible on the DUT's UI and confirm", "to start the test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Is the current level set to ####% in DUT's UI?", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "SwitchMultilevel.data.level", 1),
				answer: yesNo
			},
			{
				question: ["Is the current level set to Z-Wave value = #### (0x####), i. e. hardware level = ####%, in the DUT's UI?", "»YES-NO:SHOW«"],
				action: checkDecParam("dev", "SwitchMultilevel.data.level", 1),
				answer: yesNo
			},
			{
				question: ["Please confirm that last known state of Multilevel Switch is Z-Wave value = #### (0x####), i. e. hardware level = ####%!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "SwitchMultilevel.data.level", 2),
				answer: yesNo
			},
			{
				question: ["Please confirm that last known state of Multilevel Switch is Z-Wave value = '####' (0x####), i.e. hardware level = '####%'!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "SwitchMultilevel.data.level", 2),
				answer: yesNo
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
			{
				question: ["The following sequence verifies the minimum end user functionalities according to Requirement Number: CL:0026.01.31.01.1", "Does the DUT's UI allow to set a dimming 'Duration' for 'Setting the Level'?", "»YES-NO:SHOW«"],
				answer: yes
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
			
			// CCR_ConfigurationCC_Rev01 & Rev02
			{
				question: ["OK Interview of CC Configuration V3 sucessfully passed"],
				action: function() { lastDevice().Configuration.data.preferBulk = false }
				// TODO Remove this question once Cert house fixes this
			},
			{
				question: ["Set a configuration parameter value according to Requirement Number: CL:0070.01.31.02.1"],
				action: waitInterviewDone // make sure to fetch all params info before proceeding
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
				question: ["Please set the parameter 'Param ####' with number #### and correct size (chosen automatically in accordance with the", "interview) to value #### using the DUT's UI!", "", "******", "Timeout for Test sequence is 5 min, waiting for following events:", "* CONFIGURATION_SET"],
				action: function() {
					lastDevice().Configuration.data.preferBulk = false;
					lastDevice().Configuration.Set(decParam(2), decParam(3));
				}
			},
			{
				question: ["Please set the parameter 'Param ####' with number #### to value #### using the DUT's UI!", "", "******", "Timeout for Test sequence is 5 min, waiting for following events:", "* CONFIGURATION_BULK_SET"],
				action: function() {
					lastDevice().Configuration.data.preferBulk = true;
					lastDevice().Configuration.Set(decParam(2), decParam(3));
				}
			},
			{
				question: ["Please set the parameter 'Param ####' with number #### and Size = #### to value #### using the DUT's UI!", "", "*****", "Timeout for Test sequence is 5 min, waiting for following events:", "* CONFIGURATION_SET", "* CONFIGURATION_GET [optional]"],
				action: function() {
					lastDevice().Configuration.Set(decParam(2), decParam(4), decParam(3));
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
				question: ["Please try to set the parameter 'Param ####' with number #### to value #### (size is ####) using the DUT's UI! Is it possible to", "set the parameter value?", "»YES-NO:SHOW«"],
				action: function() {
					try {
						lastDevice().Configuration.Set(decParam(2), decParam(3), decParam(4));
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
				question: ["Please wait for the inclusion to be finished, navigate to the Z-Wave nodes list in the UI of the DUT and click 'OK' to", "reset the emulated device!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: [
					"Please wait a moment that the reset is completly processed by the DUT.",
					"Does the DUT indicate that this node (ID = ####) has been reset and left the Z-Wave network regarding to Requirement",
					"Number CL:005A.01.51.01.1",
					"»YES-NO:SHOW«"
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
				action: function() { getDevice(decParam(3)).Association.Set(decParam(2), decParam(1)) }
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
			
			// CCR_ColorSwitchCC_Rev01 & Rev02
			{
				question: ["* SWITCH_COLOR_SET for color component '####' (ID = 0x####) with value='####."],
				action: function() { lastDevice().SwitchColor.Set(byteParam(2), decParam(3)) }
			},
			{
				question: ["* SWITCH_COLOR_START_LEVEL_CHANGE for color component '####' (ID = 0x####) increasing its brightness.", "* SWITCH_COLOR_STOP_LEVEL_CHANGE for color component '####' (ID = 0x####)"],
				action: function() { lastDevice().SwitchColor.StartStateChange(byteParam(2), false); wait(1); lastDevice().SwitchColor.StopStateChange(byteParam(4)) }
				// TODO the question will be improved in future to host duration and start level
			},
			{
				question: ["Please trigger Binary Switch On or Off for the emulated device (Root) on the DUT's UI!", "", "**************", "Timeout for Test sequence is 5 min, waiting for following events:", "* SWITCH_BINARY_SET"],
				action: function() { lastDevice().SwitchBinary.Set(0) }
			},
			{
				question: ["Please trigger Multilevel Switch On or Off for the emulated device (End Point ####) on the DUT's UI!", "", "**************", "Timeout for Test sequence is 5 min, waiting for following events:", "* SWITCH_MULTILEVEL_SET"],
				// executed on root and not on EndPoint due to a bug in the test.
				action: function() { lastDevice().SwitchMultilevel.Set(0) }
			},
			{
				question: ["Is the current level of color component '####' (ID = ####) set to #### in the DUT's UI according to Requirement Number", "CL:0033.01.42.01.1?", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().SwitchColor.data[decParam(2)].level.value === decParam(3);
				},
				answer: yesNo
			},
			{
				question: ["Please make sure that the current state of the emulated Color Switch device is visible on the DUT's UI and confirm to", "start the test sequence!", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Please make sure that the current state of the emulated Color Switch device is visible in the DUT's UI and confirm to", "start the test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			
			// CCR_ImplementedCCVersions_Rev01 & Rev02
			{
				question: ["* SWITCH_BINARY_SET with any value"],
				action: function() { lastDevice().SwitchBinary.Set(0) }
			},
			{
				question: ["Warning - V2-specific Duration field has been missing!", "If a controlling node A controls a node B supporting a lower version, node A SHOULD still use the format (command", "payload) corresponding to the version node A controls, regardless of the version supported by node B.", "CL:0000.00.12.02.1", "*", "»SKIP:DISABLE«", "The DUT does NOT follow the recommendation. Is this intended?", "»YES-NO:SHOW«"],
				answer: yes
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
					return (
						dev("ctrldev").value("Indicator.data.80.3.state") == 10 &&
						dev("ctrldev").value("Indicator.data.80.4.state") == 5 &&
						dev("ctrldev").value("Indicator.data.80.5.state") == 5
					);
				},
				answer: yesNo
			},
			
			// CCR_MultiChannelCC_Rev01
			{
				question: [
					"Please refer to the DUT's UI and confirm if control of:",
					"* #### on End Point ####",
					"* #### on End Point ####",
					"* #### on End Point ####",
					"--- End Point #### does not exist! ---",
					"* #### on End Point ####",
					"--- End Point #### does not exist! ---",
					"* #### on End Point ####",
					"is provided!",
					"»YES-NO:SHOW«"
				],
				action: function() {
					function map(cc) {
						cc = cc.trim();
						switch(cc) {
							case "Binary Sensor":
								return "SensorBinary";
							case "Multilevel Sensor":
								return "SensorMultilevel";
							case "Binary Switch":
								return "SwitchBinary";
							case "Multilevel Switch":
								return "SwitchMultilevel";
							default:
								return cc;
						}
					}
					return (
						!!lastDevice().instances[decParam(2)][map(getParam(1))] &&
						!!lastDevice().instances[decParam(4)][map(getParam(3))] &&
						!!lastDevice().instances[decParam(6)][map(getParam(5))] &&
						!lastDevice().instances[decParam(7)] &&
						!!lastDevice().instances[decParam(9)][map(getParam(8))] &&
						!lastDevice().instances[decParam(10)] &&
						!!lastDevice().instances[decParam(12)][map(getParam(11))]
					);
				},
				answer: yesNo
			},
			{
				question: ["* SWITCH_BINARY_SET to End Point ####:", "* Z-Wave Value = #### (0x####)"],
				action: function() {
					return lastDevice().instances[decParam(1)].SwitchBinary.Set(byteParam(3));
				}
			},
			{
				question: ["Is the DUT capable to display the last Binary Switch state of the emulated end node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Please make sure that the current Binary Switch state of the emulated device’s End Point #### is visible in the DUT’s UI.", "Click 'OK' to start the test sequence", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Please confirm that last known state of Binary Switch on End Point #### is Z-Wave value = #### (0x####)!", "»YES-NO:SHOW«"],
				action: function() {
					return (lastDevice().instances[decParam(1)].SwitchBinary.data.level.value ? 0xFF : 0x00) === byteParam(3);
				},
				answer: yesNo
			},
			{
				question: ["* SWITCH_MULTILEVEL_SET to End Point ####:", "* Z-Wave Value = #### (0x####), i. e. hardware level = ####%"],
				action: function() {
					return lastDevice().instances[decParam(1)].SwitchMultilevel.Set(byteParam(3));
				}
			},
			{
				question: ["Is the DUT capable to display the last Multilevel Switch state of the emulated end node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Please make sure that the current Multilevel Switch state of the emulated device’s End Point #### is visible in the DUT’s", "UI. Click 'OK' to start the test sequence", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Please confirm that last known state of Multilevel Switch on End Point #### is Z-Wave value = #### (0x####), i. e. hardware", "level = ####%!", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().instances[decParam(1)].SwitchMultilevel.data.level.value === byteParam(3);
				},
				answer: yesNo
			},

			//Set User Code ID 50 to 'Disabled' with code 'ABCDE'!
			// CCR_UsercodeCC_Rev02 & Rev03
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
			{
				question: ["Inclusion and interview passed, click 'OK' to continue with testing the node properties and additional control", "requirements", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["The following test sequence verifies if the DUT displays a unsolicited Notification Report correctly. Please make sure", "that the UI for Alarm / Notification Command Class is visible and click 'OK' when ready!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Does the DUT display a '#### (0x####)' event for the notification type '####'", "»YES-NO:SHOW«"],
				action: function() {
					wait(2); // TODO due to CTT asking a bit too early
					
					var ret = false;
					var data = lastDevice().Alarm.data;
					Object.keys(data).forEach(function(type) {
						if (isFinite(parseInt(type)) && data[type].typeString && (data[type].typeString.value === getParam(3) || data[type].typeString.value === getParam(3).replace(/Alarm$/,'') || data[type].typeString.value === getParam(3).replace(/^Home/,''))) {
							if (data[type][byteParam(2)] && data[type][byteParam(2)].status.value === true) {
								ret = true;
							}
						}
					});
					return ret;
				},
				answer: yesNo
			},
			{
				question: ["Does the DUT display the event '#### (0x####)' for the notification type '#### (0x####)'?", "»YES-NO:SHOW«"],
				action: function() {
					wait(2); // TODO due to CTT asking a bit too early
					
					var ret = false;
					var data = lastDevice().Alarm.data;
					Object.keys(data).forEach(function(type) {
						if (type === byteParam(4)) {
							if (data[type][byteParam(2)] && data[type][byteParam(2)].status.value === true) {
								ret = true;
							}
						}
					});
					return ret;
				},
				answer: yesNo
			},
			{
				question: ["Does the DUT display the event '#### (0x####)' for the notification type", "'#### (0x####)'?", "»YES-NO:SHOW«"],
				action: function() {
					wait(2); // TODO due to CTT asking a bit too early
					
					var ret = false;
					var data = lastDevice().Alarm.data;
					Object.keys(data).forEach(function(type) {
						if (type === byteParam(4)) {
							if (data[type][byteParam(2)] && data[type][byteParam(2)].status.value === true) {
								ret = true;
							}
						}
					});
					return ret;
				},
				answer: yesNo
			},
			{
				question: ["Does the DUT display the event '#### (0x####)' for", "the notification type '#### (0x####)'?", "»YES-NO:SHOW«"],
				action: function() {
					wait(2); // TODO due to CTT asking a bit too early
					
					var ret = false;
					var data = lastDevice().Alarm.data;
					Object.keys(data).forEach(function(type) {
						if (type === byteParam(4)) {
							if (data[type][byteParam(2)] && data[type][byteParam(2)].status.value === true) {
								ret = true;
							}
						}
					});
					return ret;
				},
				answer: yesNo
			},
			{
				question: ["Does the DUT display the event ' (0x####)' for the notification type '#### (0x####)'?", "»YES-NO:SHOW«"],
				action: function() {
					wait(2); // TODO due to CTT asking a bit too early
					
					var ret = false;
					var data = lastDevice().Alarm.data;
					Object.keys(data).forEach(function(type) {
						if (type === byteParam(3)) {
							if (data[type][byteParam(1)] && data[type][byteParam(1)].status.value === true) {
								ret = true;
							}
						}
					});
					return ret;
				},
				answer: yesNo
			},
			{
				question: ["Does the state of notification type '####' return to 'idle'?", "»YES-NO:SHOW«"],
				action: function() {
					wait(2); // TODO due to CTT asking a bit too early
					
					var ret = false;
					var data = lastDevice().Alarm.data;
					Object.keys(data).forEach(function(type) {
						if (isFinite(parseInt(type)) && data[type].typeString && (data[type].typeString.value === getParam(1) || data[type].typeString.value === getParam(1).replace(/Alarm$/,'') || data[type].typeString.value === getParam(1).replace(/^Home/,''))) {
							var events = Object.keys(data[type]);
							ret = true;
							events.forEach(function(event) {
								if (isFinite(parseInt(event)) && data[type][event].status) {
									ret &= data[type][event].status.value === false;
								}
							});
						}
					});
					return ret;
				},
				answer: yesNo
			},
			{
				question: ["A controlling node MUST have a UI allowing the end user to see the received Notification Reports (Notification Type and", "event/state) [CL:0071.01.41.01.1, CL:0071.01.51.05.2]", "The following test sequence verifies if the DUT displays an unsolicited Notification Report correctly. Please make sure", "that the UI for Alarm / Notification Command Class is visible and click 'OK' when ready!", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Does the DUT UI allow to create rules or commands based on received notifications?", "»YES-NO:SHOW«"],
				answer: no
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
				question: ["Confirm that last known mode of thermostat is '####' (0x####) in the DUT UI!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "ThermostatMode.data.mode", 2),
				answer: yesNo
			},
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
				question: ["Prepare the DUT to send any S2 encapsulated command to the CTT End Device (Node ID = ####) ...", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Click 'OK' and send any S2 encapsulated command from DUT to CTT End Device (Node ID = ####)!", "»OK:SHOW«"],
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
				question: ["Please wait that the Inclusion has finished, make sure that the DUT has completed the Association and AGI interview and", "proceed by clicking 'OK'", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
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

			// RT_CSCIsFirstNodeInNetwork_Rev02
			{
				question: ["Is it still possible to activate the Learn Mode in the DUT's UI?", "»YES-NO:SHOW«"],
				action: function() {
					return !(dev("ctrl").value("isRealPrimary") && (zway.devices.length > 1));
				},
				answer: yesNo
			},
			{
				question: ["Click 'OK' as soon as the Exclusion process has been finished on the DUT side.", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Please click 'OK' and use the DUT's UI to send any command to CTT End Device (Node ID = ####).", "»OK:SHOW«"],
				action: function() {
					send(ok)
					getDevice(decParam(1)).Basic.Get()
				}
			},
			{
				question: ["Is the CTT End Device shown as failed device in the DUT's device list?", "»YES-NO:SHOW«"],
				action: function() {
					waitIdle()
					return getMaxDevice().data.isFailed.value
				},
				answer: yesNo
			},
			{
				question: ["Is the CTT End Device shown in the DUT's device list?", "»YES-NO:SHOW«"],
				action: function() {
					return !!lastDevice()
				},
				answer: yesNo
			},
			{
				question: ["Is DUT's UI offering a possibility to remove the failed CTT End Device?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Please wait for the DUT not sending any commands and click 'OK'.", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Please wait for the DUT not sending commands anymore and click 'OK'.", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Please click 'OK' and use the DUT's UI to remove the failed CTT End Device (Node ID = ####).", "»OK:SHOW«"],
				action: function() {
					send(ok)
					zway.RemoveFailedNode(decParam(1))
				}
			},
			{
				question: ["Please click 'OK' and use the DUT's UI to replace the failed CTT End Device (Node ID = ####).", "»OK:SHOW«"],
				action: function() {
					send(ok)
					zway.ReplaceFailedNode(decParam(1))
				}
			},
			{
				question: ["Is the CTT End Device removed from the DUT's device list?", "»YES-NO:SHOW«"],
				action: function() {
					return zway.devices.length == 1
				},
				answer: yesNo
			},

			// RT_CSCLifelineConfigIfSIS_Rev02
			{
				question: ["Click 'OK' and use the DUT's UI to send any secure command to the CTT End Device", "»OK:SHOW«"],
				action: function() {
					send(ok)
					lastDevice().Basic.Get()
				}
			},

			// S2 tests
			{
				question: ["Click 'OK' and send any S2 Command from DUT to Controller Node ID = ####", "»OK:SHOW«"],
				action: function() {
					send(ok)
					lastDevice().Basic.Get()
				}
			},
			{
				question: ["If possible, verify that the DUT UI shows the included device as 'non-secure'.", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Is it possible to select which keys the DUT grants to a node during an Inclusion?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Set DUT into Add Mode and click 'OK'.", "Unselect all security keys / do not accept any key in the Inclusion UI!", "(Cancel to skip the step. However, this would fail the Test Case result.)", "»OK-CANCEL:SHOW«"],
				action: function() {
					zway.controller.data.S2AutoInclude.keys = 0; // no keys
					startInclusion()
				},
				answer: ok
			},
			{
				question: ["Is CTT Controller included non-securely?", "»YES-NO:SHOW«"],
				action: function() {
					return !lastDevice().SecurityS2.data.securityAbandoned.value;
				},
				answer: yesNo
			},
			{
				question: ["Is the CTT Controller shown as non-securely included?", "»YES-NO:SHOW«"],
				action: function() {
					return !lastDevice().SecurityS2.data.securityAbandoned.value;
				},
				answer: yesNo
			},
			{
				question: ["Wait until the DUT is ready (after having aborted S2 bootstrapping)!", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Make sure the DUT is SIS and has NodeId = 1!", "Otherwise, reset it!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Make sure the DUT is SIS and has Node ID = 1!", "Otherwise, reset it!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Make sure the DUT is SIS and has Node ID = 1! Otherwise, reset it!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Make sure the DUT is SIS! Otherwise, reset it!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Please reset the DUT!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Reset the DUT and click 'OK' to continue!", "»OK:SHOW«"],
				action: reset,
				answer: ok
			},
			{
				question: ["Is the DUT able to confirm (or adjust) the requested keys before granting them to a joining node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Did the DUT present a dialog with the requested security classes?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Did the DUT ask for confirmation before granting S2 Authenticated Class?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Activate the Add Mode in the UI of the DUT. Click 'OK' when the Add Mode is active", "»OK:SHOW«"],
				action: startInclusion,
				answer: yes
			},
			{
				question: ["Click 'OK' when the inclusion and interview process has been finished on the DUT side.", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Wait until the DUT has finished interviewing the CTT Controller!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Wait until the DUT has finished interviewing the CTT Controller!", "", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: [" Abort interview or wait until the DUT is ready!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			{
				question: ["Click 'OK' to start Inclusion of the DUT!", "»OK:SHOW«"],
				action: startLearnMode,
				answer: yes
			},
			{
				question: ["Please use the DUT's UI to send a Basic Set command to CTT End Device (Node ID = ####) and click 'OK'.", "»OK:SHOW«"],
				action: function() {
					getDevice(decParam(1)).Basic.Set(0)
				},
				answer: ok
			},
			{
				question: ["Press 'OK' and send a Basic Set command from the DUT to Node ID ####.", "»OK:SHOW«"],
				action: function() {
					send(ok)
					getDevice(decParam(1)).Basic.Set(0)
				}
			},
			{
				question: ["Have all keys been pre-selected?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT request CSA (client-side authentication)?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Does the DUT have a special password-protected menu, dedicated to allow S0 bootstrapping as SIS",  "when an S0 Node is included by a non-secure Inclusion Controller, (hereafter 'special menu')?", "If yes, do NOT access that special menu!", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: ["Did the DUT present its own full DSK with the underlined PIN portion?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Did the DUT present a dialog for entering the PIN portion of the CTT Controller’s DSK", "and show the rest of that DSK for visual validation?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Have all Security Classes been preselected automatically", "in order to be granted to the joining node?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Ready for exclusion?", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: [
					"The DUT is allowed to show that the CTT Controller supports e.g. Notification CC (e.g. Heat Alarm).",
					"But does the DUT show any hints or control elements considering that the CTT Controller supports",
					"- Battery CC (e.g. battery level) or",
					"- Switch Binary CC (e.g. on/off) or",
					"- Sensor Multilevel CC (e.g. air temperature)?",
					"»YES-NO:SHOW«"
				],
				action: function() {
					return !lastDevice().Alarm || !!lastDevice().Battery || !!lastDevice().SwitchBinary || !!lastDevice().SensorMultilevel;
				},
				answer: yesNo
			},
			{
				question: ["Debug option: Should the Test Case pause on requests that were answered incorrectly? This allows to review the Zniffer", "trace immediately before continuing and to repeat the failed requests.", "»YES-NO:SHOW«"],
				answer: no
			},
			{
				question: [
					"Is it possible to actively deselect the S2_ACCESS key in the DUT UI",
					"during S2 bootstrapping of the CTT Controller?",
					"(If 'No', this test will be skipped.)",
					"»YES-NO:SHOW«"
				],
				action: function() {
					return prepareS2(undefined, 0x83);
				},
				answer: yes
			},
			{
				question: ["Wait until the DUT is ready to start inclusion!", "»OK:SHOW«"],
				action: waitIdle,
				answer: ok
			},
			{
				question: ["Does the DUT present a warning message informing the user that the CTT Controller", "has NOT been granted ANY security key?", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().SecurityS2.data.securityAbandoned.value;
				},
				answer: yesNo
			},
			{
				question: ["Is the CTT Controller listed as a non-secure device?", "»YES-NO:SHOW«"],
				action: function() {
					return lastDevice().SecurityS2.data.securityAbandoned.value;
				},
				answer: yesNo
			},
			{
				// TODO non-space character between WARNING and MESSAGE
				question: ["Does the DUT present a WARNING MESSAGE that the joining node has been granted the S0 key only?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						lastDevice().SecurityS2.data.securityAbandoned.value == false &&
						lastDevice().SecurityS2.data.grantedKeys.S0.value == true &&
						lastDevice().SecurityS2.data.grantedKeys.S2Unauthenticated.value == false &&
						lastDevice().SecurityS2.data.grantedKeys.S2Authenticated.value == false &&
						lastDevice().SecurityS2.data.grantedKeys.S2Access.value == false
					);
				},
				answer: yesNo
			},
			{
				// TODO non-space character between WARNING and MESSAGE
				question: ["Does the DUT present a WARNING MESSAGE that the joining node has been included with S0 security?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						lastDevice().Security.data.securityAbandoned.value == false &&
						!lastDevice().SecurityS2
					);
				},
				answer: yesNo
			},
			{
				question: ["Is the CTT Controller listed as an S0 device in the DUT UI?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						lastDevice().Security.data.securityAbandoned.value == false &&
						(
							!lastDevice().SecurityS2
							||
							(
								lastDevice().SecurityS2.data.securityAbandoned.value == false &&
								lastDevice().SecurityS2.data.grantedKeys.S0.value == true &&
								lastDevice().SecurityS2.data.grantedKeys.S2Unauthenticated.value == false &&
								lastDevice().SecurityS2.data.grantedKeys.S2Authenticated.value == false &&
								lastDevice().SecurityS2.data.grantedKeys.S2Access.value == false
							)
						)
					);
				},
				answer: yesNo
			},
			{
				
				question: ["Is the S2 Node (Node ID = ####) shown in the DUT’s device list", "as added with S2 security?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						getDevice(decParam(1)) &&
						getDevice(decParam(1)).SecurityS2.data.securityAbandoned.value == false &&
						(
							getDevice(decParam(1)).SecurityS2.data.grantedKeys.S2Unauthenticated.value == true ||
							getDevice(decParam(1)).SecurityS2.data.grantedKeys.S2Authenticated.value == true ||
							getDevice(decParam(1)).SecurityS2.data.grantedKeys.S2Access.value == true
						)
					);
				},
				answer: yesNo
			},
			{
				question: ["Is the S0 Node (Node ID = ####) shown in the DUT’s device list", "as added with S0 security?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						getDevice(decParam(1)) &&
						getDevice(decParam(1)).Security.data.securityAbandoned.value == false
					);
				},
				answer: yesNo
			},
			{
				question: ["Is the S0 Node (Node ID = ####) shown in the DUT’s device list", "as non-securely added?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						getDevice(decParam(1)) &&
						(
							!getDevice(decParam(1)).Security ||
							getDevice(decParam(1)).Security.data.securityAbandoned.value == true
						)
					);
				},
				answer: yesNo
			},
			{
				question: ["Is the S2 Node (Node ID = ####) shown in the DUT’s device list", "as non-securely added?", "»YES-NO:SHOW«"],
				action: function() {
					return (
						getDevice(decParam(1)) &&
						(
							!getDevice(decParam(1)).SecurityS2 ||
							getDevice(decParam(1)).SecurityS2.data.securityAbandoned.value == true
						)
					);
				},
				answer: yesNo
			},
			{
				question: ["Has the S0 Node (Node ID = ####) been removed from DUT’s device list?", "»YES-NO:SHOW«"],
				action: function() {
                                        return !getDevice(decParam(1));
				},
				answer: yesNo
			},
			{
				question: ["Has the S2 Node (Node ID = ####) been removed from DUT’s device list?", "»YES-NO:SHOW«"],
				action: function() {
                                        return !getDevice(decParam(1));
				},
				answer: yesNo
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