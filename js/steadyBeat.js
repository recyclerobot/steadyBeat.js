/*
 _    _        _    _            _      _    _       ______ _             
| |  | |      | |  | |          | |    | |  | |      | ___ \ |            
| |  | | ___  | |  | | ___  _ __| | __ | |  | | ___  | |_/ / | __ _ _   _ 
| |/\| |/ _ \ | |/\| |/ _ \| '__| |/ / | |/\| |/ _ \ |  __/| |/ _` | | | |
\  /\  /  __/ \  /\  / (_) | |  |   <  \  /\  /  __/ | |   | | (_| | |_| |
 \/  \/ \___|  \/  \/ \___/|_|  |_|\_\  \/  \/ \___| \_|   |_|\__,_|\__, |
                                                                     __/ |
                                                                    |___/ 
*/

(function ( steadyBeat, undefined ) {

	// DEFINES
	// -----------------------------------

	var loopInterval,
		intervalTime = 500, // value in milliseconds, defaults to 500ms (120bpm = 1/(120/60))
		globalCounter = 1,
		timestamp,
		loopExecMem = false;

	
	// PUBLIC
	// -----------------------------------

	steadyBeat.start = function(tempo)
	{
		intervalTime = (tempo) ? tempo : intervalTime;
		timestamp = (new Date()).getTime();
		run();
	};
	steadyBeat.stop = function()
	{
		clearInterval(loopInterval);
		loopInterval = false; // important to prevent leaks

		globalCounter = 1;		
	};
	steadyBeat.setTempo = function(newTempo)
	{
		intervalTime = newTempo;
	};
	steadyBeat.setReturnLoop = function(loopExec){
		if(!loopExecMem || loopExec != loopExecMem && loopExec !== undefined){
			loopExecMem = loopExec;
		}
	};
	steadyBeat.loop = function(loopExec)
	{	
		if(loopExecMem){
			loopExecMem();
		}
	};

	// PRIVATE
	// -----------------------------------
    
	function run()
	{
		var now = (new Date()).getTime();
		if( (now - timestamp) - (intervalTime*globalCounter) >= 0 ) {
			globalCounter++;
			steadyBeat.loop();
		}
		loopInterval = setTimeout(run, 10); // you can play with the timeout interval to improve performance on certain older machines
	}

})(window.steadyBeat = window.steadyBeat || {});