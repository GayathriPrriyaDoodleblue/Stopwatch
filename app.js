var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timer =false;

function startStopwatch() {
    timer = true;
    stopwatch();
}

function stopStopwatch() {
    timer = false;

}

function resetStopwatch() {
    timer = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds=0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("mil").innerHTML = "00";
}
function stopwatch(){
    if(timer == true){
        milliseconds =milliseconds+1;
        if(milliseconds ==100){
            seconds=seconds+1;
            milliseconds=0;
        }
        if(seconds==60){
            minutes=minutes+1;
            seconds=0;
        }
        if(minutes==60){
            hours=hours+1;
            minutes=0;
            seconds=0;
        }
        var hrstring=hours;
        var minstring=minutes;
        var secstring=seconds;
        var milstring=milliseconds;
        if(hours < 10){
            hrstring="0"+hours;
        }
        if(minutes < 10){
            minstring="0"+minutes;
        }
        if(seconds < 10){
            secstring="0"+seconds;
        }
        if(milliseconds < 10){
            milstring="0"+milliseconds;
        }

        document.getElementById("hr").innerHTML=hrstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("mil").innerHTML=milstring;


       setTimeout("stopwatch()",10);
    }
}
