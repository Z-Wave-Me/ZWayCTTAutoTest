# Z-Way CTT Auto Test Server

This module for Z-Way Server helps to automate CTT tests of Z-Way

# Running

Run CTT-WS app. It should execute CTT and connect to this app.

# Adding new questions from CTT log

Add questions to the *handlers.js*.

Questions consists of three items:

- question
- action
- answer

Example:

    {
        question: ["Activate the Add mode in the UI of the DUT and click 'OK' to start Inclusion by the DUT!", "»OK:SHOW«"],
        action: startInclusion,
        answer: ok
    },

### Question

An array of lines making a question. A question can consist of multiple lines or from only one line.

Leading and trailing spaces are ignored in the search. Don't include \n in the question.

If a question requires an answer, always include »OK:SHOW«, »YES-NO:SHOW«, »OK-CANCEL:SHOW« or »SKIP:DISABLE« in the question array to make sure the answer does not come before the question is asked by the CTT.

Replace variable part with #### placeholder (four hash marks). Multiple placeholder can occur in one line. Each placeholder will be stored in parameters passed to *actions*. Parameter numbers start with 1.

Try to make questions more generic by replacing all hard-coded values to #### and check them in the *action* with real values in the Z-Way engine.

### Action

Action represents a function to be executed by Z-Way before answering the question. Action can also return a value that will be used in the answer.

There are popular pre-defined actions:
- **reset** - reset Z-Wave controller
- **resetAndStartInclusion** - reset Z-Wave controller and start adding a node
- **startInclusion** - start adding a node
- **startExclusion** - start removing a node
- **startLearnMode** - start including Z-Way into another network
- **forceInterview** - restarts interview on the last included device by request NIF
- **isDevicePresent(param)** - check if the device with ID equal to parameter *param* is present and return true/false for yesNo
- **waitInterviewDone** - wait until interview of the last included device is finished
- **waitInterviewDoneOrIdle** - wait until interview of the last included device is finished or Z-Way is idle (if no devices were included)
- **waitIdle** - wait until Z-Way is idle
- **waitAndExecute(delay, func)** - wait *delay* seconds and execute *func*
- **checkDecParam(obj, path, param)** - check that the parameter *param* converted to integer is equal to the value of dataholder *path* on object *obj*
- **checkFloatParam(obj, path, param)** - check that the parameter *param* converted to float is equal to the value of dataholder *path* on object *obj*
- **checkByteParam(obj, path, param)** - check that the parameter *param* converted from byte to integer is equal to the value of dataholder *path* on object *obj*; value should be without 0x, so use 0x####
- **checkWordaram(obj, path, param)** - check that parameters *param1* (MSB) and *param2* (LSB) converted from word to integer are equal to the value of dataholder *path* on object *obj*; value should be without 0x, so use 0x####
- **checkMappedParam(obj, path, func)** - check that the parameter *param* (as string) is equal to the value of dataholder *path* on object *obj* transformed with *func*
- **checkScale(cc, selector, scaleParam, valueParam)** - check that the parameter *valueParam* is equal to the value of a dataholder with scale equal to *scaleParam* (string like "°C" or the parameter number refering to the scale) on a specific command class with name *cc*; *selector* refers to the name of the dataholder storing the scale on this CC
- **checkAllScalesZero(cc)** - check that values for all scales are zero

It is also possible to define own action using JavaScript function:

    action: function() { ... }

Inside function the following helper functions can be used:
- **prepareS2(pin, keys)** - save S2 PIN and list of keys to grant for the upcoming inclusion; if *pin* is 0/null/undefined, use the previously saved PIN (from prevous inclusions of that S2 device), *keys* is a bit mask 0x80 for S0, 0x01 for S2 Unauth, 0x02 for S2 Auth, 0x04 for S2 Access or -1 (or not specified) for all
- **lastDevice()** - returns the last included device object like zway.devices[lastIncludedID]; can be used as *lastDevice().DoorLock.Set(0)*
- **getDevice(id)** - returns the device object with ID equal to *id*
- **getMaxDevice()** - returns the device object with the highest ID
- **controllerDevice()** - returns the device object for the controller (Z-Way)
- **controller()** - returns the controller object
- **getParamsCount()** - returns the number of matched parameters
- **getParam(param)** - returns the parameter number *param* as a string; first parameter is 1
- **decParam(param)** - returns the parameter number *param* as an integer
- **floatParam(param)** - returns the parameter number *param* as a float
- **byteParam(param)** - returns the parameter number *param* with conversion from hex to integer
- **wordParam(param1, param2)** - returns the parameters number *param1* and *param2* with conversion from hex word represented by *param1* (MSB) and *param2* (LSB) to integer
- **hex(v)** - converts heximal byte value to integer, e.g. FF string to 255
- **hexWord(v1, v2)** - converts heximal word value represented by two separate bytes to decimal, e.g. 01 02 to 258
- **exec** - executes actions - allows to use actions from the list above as functions; e.g. *exec(checkScale("Meter", "scaleString", 1, 0)*
- **send(answer)** - send *answer* (ok, yes, no or cancel) and contine with other action; don't add *answer* section to this question; this is useful if you need to execute something after answering
- **wait(delay)** - wait *delay* seconds before continuing; if the question should be answered before executing some function (without blocking), use *defer(1, function() { lastDevice().Basic.Get(); })* instead of *wait(1); lastDevice().Basic.Get()*
- **defer(delay, func)** - execute *func* after a *delay* seconds without blocking the rest of the code
- **ccCentralSceneKeyAttribute(str)** - converts CentralScene KeyAttribute text to scene id
- any of pre-defined action with () at the end, e.g. *waitIdle()* or *startInclusion()* is same as using *exec(waitIdle)* or *exec(startInclusion)*

Useful Z-Way API functions that can also be used:
- zway.controller.SendNodeInformation() - send controller NIF
- lastDevice().Basic.Get() - Send a Basic Get
- zway.RemoveFailedNode(id) - initiate removing of a failed node
- zway.devices.length - returns the number of devices
- lastDevice().Basic.data.*path* = *value* - assign *value* to *path* on Basic data
- lastDevice().Basic.data.*path*.value - read *value* from *path* on Basic data
- zway.controller.data.*path* = *value* - assign *value* to *path* on the controller
- !!lastDevice().Battery - check if Battery CC is present

Check *helpers.js* for all helpers and *handlers.js* for more examples.

Some questions have no actions. In that case the question will be imediatelly answered.

### Answer

Answer replies to CTT by clicking the corresponding button.
Valid answers are:
- **yes** - clicks Yes
- **no** - clicks No
- **yesNo** - clicks Yes if the *action* returns true, otherwise No
- **cancel** - clicks Cancel
- **ok** - clicks Ok
- **alern** - clicks No and issue an error message in the Z-Way log

More answers are defined in *helpers.js*.

Some questions don't need any answer.

Make sure the answer corresponds to the expected reply:
- **»OK:SHOW«** - *ok*
- **»YES-NO:SHOW«** - *yes*, *no* or *yesNo*
- **»OK-CANCEL:SHOW«** - *ok* or *cancel*
- **»SKIP:DISABLE«** - *yes*, *no* or *yesNo*

# Preparing questions

You can use the following script to covert CTT log output into a question template:

    cat CTT-log.txt | tr -d '\r' | sed 's/{[^}]*}//g;s/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9] //;s/^             //' | grep -aB 1 -A 1 :SHOW | awk '{if(NR%4==1)printf("%s", "{ question: [\"" $0 "\", "); if(NR%4==2) printf("\"" $0 "\"],"); if(NR%4==3) print(" answer: \"" $0 "\" },")}'| sort -u

Then replace all values and IDs that can vary with ####.

# Reloading the app

Sometimes some qusetion is missing during the test. This app will not react on such a question. If this is find, edit the *handlers.js* to add the corresponding question.

After editing reload the module using http://localhost:8083/ZAutomation/api/v1/modules/reinitialize/ZWayCTTAutoTest

Retry handling of last CTT log lines after reload: http://localhost:8083/ZWayCTTAutoTestAPI/Reload
