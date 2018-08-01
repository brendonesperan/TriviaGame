window.onload = function() {

    // global variables
    var intervalId;
    var clockRunning = false;
    var time = 30;

    $("#startButton").on("click", start);





    function start () {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement () {

        time-=1;

        $("#timerDisplay").html("<h2>" + "00:" + time + "</h2>");

        if (time === 0) {
            stop();
            $("#announcements").html("<h2>" + "Time's up!" + "</h2>");
        }

    }

    function stop () {
        clearInterval(intervalId);
    }



    function constructQuestion () {

    }

};
