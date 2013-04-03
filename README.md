steadyBeat.js
===========

Javascript metronome using browser clock  
written by Thijs (@recyclerobot)  
at We Work We Play  
[weworkweplay.com](http://weworkweplay.com)

Usage
===
    <script src="js/steadyBeat.js"></script>
    <script>
        // EXAMPLE USAGE
        // 1. set return function to be called every time
        steadyBeat.setReturnLoop(function(){
            console.log("CLICK");
            // or play audio file using your favorite audio lib
        });
        // 2. start our metronome and define tempo
        steadyBeat.start(300); // set Tempo to 300 milliseconds
        
    </script>
    
Demo
===
[http://recyclerobot.github.com/steadyBeat.js/](http://recyclerobot.github.com/steadyBeat.js/)  
