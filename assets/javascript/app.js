window.onload = function() {
    $("#lap").on("click", stopwatch.recordLap);
    $("#stop").on("click", stopwatch.stop);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };

// global variables
var intervalId;
var clockRunning = false;
var time;

$("#startButton").on("click", start);





function start () {
    clearInterval(intervalId);
}

function decrement () {

    number-=1;

    $("#timerDisplay").html("<h2>" + number + "</h2>");
}

function stop () {
    clearInterval(intervalId);
}



function constructQuestion () {

}

