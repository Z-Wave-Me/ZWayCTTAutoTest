function ZWayCTTAutoTestQA(helpers) {
	with(helpers) {
		return qa = [
			// Preparing questions:
			//  cat CTT-log.txt | tr -d '\r' | sed 's/{[^}]*}//g;s/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9] //;s/^             //' | grep -aB 1 -A 1 :SHOW | awk '{if(NR%4==1)printf("%s", "{ question: [\"" $0 "\", "); if(NR%4==2) printf("\"" $0 "\"],"); if(NR%4==3) print(" answer: \"" $0 "\" },")}'| sort -u
			
			/*
			{
				question: ["'1230.0' ppm (CL:0031.01.41.01.1)", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["'1.23' kWh", "»YES-NO:SHOW«"],
				answer: yes
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
				question: ["'43.21' kVar", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
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
			{
				question: ["Click 'Ok' as soon as the Inclusion process has finished on the DUT side!", "»OK:SHOW«"],
				action: waitInterviewDone,
				answer: ok
			},
			/*
			{
				question: ["Click ok to start test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			{
				question: ["Color Switch Start / Stop Level Change was not set correctly within timeout! Retry?", "»YES-NO:SHOW«"],
				answer: alert
			},
			{
				question: ["Configuration Set / Get was not triggered correctly within timeout! Retry?", "»YES-NO:SHOW«"],
				answer: alert
			},
			/*
			{
				question: ["Confirm if the Current State has been set to #### referring to the DUT's UI!", "»YES-NO:SHOW«"],
				answer: yesNo
			},
			*/
			/*
			{
				question: ["Confirm that 'kWh' scale is set to #### in the DUTs UI!", "»YES-NO:SHOW«"],
				answer: yesNo
			},
			*/
			{
				question: ["Confirm that last known mode of thermostat is '####' (0x####) in the DUTs UI!", "»YES-NO:SHOW«"],
				action: checkByteParam("dev", "Thermostat.data.mode", 2),
				answer: yesNo
			},
			/*
			{
				question: ["Confirm that last known value of 'AirTemperature' in °C in the DUTs UI is '####'!", "»YES-NO:SHOW«"],
				answer: yesNo
			},
			*/
			/*
			{
				question: ["Did the DUT pass the test?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
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
			/*
			{
				question: ["Does the actual DUT implementation reflect what the documentation claims?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Does the DUT empower the consumer or end user to lock or unlock the Anti-Theft feature of a controlled node?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Does the DUT meet the requirement described above?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
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
			/*
			{
				question: ["Does User Icon Type = 05 00 match the actual device?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			{
				question: ["Has the DUT an integrated Z-Wave ASIC/Module?", "»YES-NO:SHOW«"],
				answer: yes
			},
			{
				question: ["Has the DUT removed this node (ID = ####) from its Z-Wave nodes list? (see Requirement Number CL:005A.01.52.01.1)", "»YES-NO:SHOW«"],
				action: isDevicePresent,
				answer: yesNo
			},
			/*
			{
				question: ["Has the Setpoint been set sucessfully?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Has the Setpoint been set sucessfully?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			{
				question: ["Include the CTT Slave into the DUT network ...", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click OK to continue with testing minimum user and additional control requirements.", "»OK:SHOW«"],
				answer: ok
			},
			{
				question: ["Inclusion and interview passed, click OK to continue with testing minimum user requirements.", "»OK:SHOW«"],
				answer: ok
			},
			/*
			{
				question: ["Is COMMAND_CLASS_ANTITHEFT_V3 controlled?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_APPLICATION_STATUS controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_ASSOCIATION_GRP_INFO_V3 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_ASSOCIATION_V3 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_BARRIER_OPERATOR controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_BASIC_V2 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_CENTRAL_SCENE_V3 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_CLOCK controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_CONFIGURATION_V4 controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is COMMAND_CLASS_CONTROLLER_REPLICATION controlled?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Is it possible to activate this Device Type in the DUT?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Is the current level set to 20% in DUT's UI?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			{
				question: ["Is the DUT mains-powered?", "»YES-NO:SHOW«"],
				answer: yes
			},
			/*
			{
				question: ["Is this correct?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			{
				question: ["Multilevel Switch Start / Stop Level Change was not set correctly within timeout! Retry?", "»YES-NO:SHOW«"],
				action: alert,
				answer: yes
			},
			/*
			{
				question: ["Number CL:005A.01.51.01.1", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Number CL:005A.01.51.01.1", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["of each controlled Command Class?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			{
				question: ["Please navigate to the visualisation of the emulated device on the DUT's UI. Is there any possibility to see the status", "or control the device using the Basic Command Class?", "»YES-NO:SHOW«"],
				answer: no
			},
			/*
			{
				question: ["parameter value?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Please check if current mode is set to 'Unsecured'. Is mode is displayed correctly?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Please confirm if that last known state of Binary Switch is 'off' (0x00)!", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Please consult the UI of the DUT - does the DUT meet the requirement described above?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Please consult the UI of the DUT - does the DUT meet the requirement described above?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Please consult the UI of the DUT - does the DUT meet the requirement for parameter numbers 1, 2, 300?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Please consult the UI of the DUT - does the DUT meet the requirement for parameter numbers 1, 2, 300?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Please navigate to 'AirTemperature' on DUT's UI and make '°C' scale visible!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["Please wait for Interview to be finished and proceed with clicking 'OK'!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["Please wait for the Inclusion to be finished and continue by clicking 'OK'!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["Please wait for the interview to be finished and click 'OK' to proceed!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["Please wait for the interview to be finished and continue with clicking 'OK'!", "»OK:SHOW«"],
				answer: ok
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
				question: ["reset the emulated device!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["scanning the QR Code?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Spot-check test of a user triggered complete comissioning interview failed! Retry?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["Spot-check test of a user triggered complete comissioning interview failed! Retry?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["start the test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["TBD", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["the DUT can be reset to factory settings?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Thermostat Setpoint Set was not set correctly within timeout! Retry?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["the test sequence!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["UI!", "»OK:SHOW«"],
				answer: ok
			},
			*/
			/*
			{
				question: ["under test' in order to support Security 2 after the (OTA) update?", "»YES-NO:SHOW«"],
				answer: no
			},
			*/
			/*
			{
				question: ["under test' in order to support Security 2 after the (OTA) update?", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["»URL-DEFINE:https://certification.z-wavealliance.org/wiki/index.php/Control_Definitions_-_Security_0_Command_Class«", "»URL-OPEN-CANCEL:SHOW«"],
				answer: open
			},
			*/
			/*
			{
				question: ["»URL-DEFINE:https://certification.z-wavealliance.org/wiki/index.php/Control_Definitions_-_Supervision_Command_Class«", "»URL-OPEN-CANCEL:SHOW«"],
				answer: open
			},
			*/
			/*
			{
				question: ["»URL-DEFINE:https://certification.z-wavealliance.org/wiki/index.php/CRC-16_Command_Class_advertised_in_NIF«", "»URL-OPEN-CANCEL:SHOW«"],
				answer: open
			},
			*/
			/*
			{
				question: ["Wait a moment and confirm if all meter scales has been reset on DUTs UI!", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			/*
			{
				question: ["Wait a moment and confirm that the state is visualized on DUTs UI according to Requirement Number CL:0025.01.51.01.1!", "»YES-NO:SHOW«"],
				answer: yes
			},
			*/
			{
				question: ["Will the product be available in USA?", "»YES-NO:SHOW«"],
				answer: yes
			},
		];
	}
}
