window.onload = function() {

    // global variables
    var intervalId;
    var clockRunning = false;
    var time = 5;
    var gameOver = false;

    $("#startButton").on("click", start);

    // selecting true or false buttons will change the display text and change the question's status
    // messy, but works
    $("#oneTrue").on("click", function () {     //incorrect
        $("#oneStatus").html("<h3>" + "WRONG" + "</h3>");
        $("#oneStatus").attr("data", 1);
    })
    $("#oneFalse").on("click", function () {    //correct
        $("#oneStatus").html("<h3>" + "CORRECT" + "</h3>");
        $("#oneStatus").attr("data", 1);
    })
    $("#twoTrue").on("click", function () {     //correct
        $("#twoStatus").html("<h3>" + "CORRECT" + "</h3>");
        $("#twoStatus").attr("data", 1);
    })
    $("#twoFalse").on("click", function () {    //incorrect
        $("#twoStatus").html("<h3>" + "WRONG" + "</h3>");
        $("#twoStatus").attr("data", 1);
    })
    $("#threeTrue").on("click", function () {   //correct
        $("#threeStatus").html("<h3>" + "CORRECT" + "</h3>");
        $("#threeStatus").attr("data", 1);
    })
    $("#threeFalse").on("click", function () {  //incorrect
        $("#threeStatus").html("<h3>" + "WRONG" + "</h3>");
        $("#threeStatus").attr("data", 1);
    })



    function start () {
        if(!gameOver) {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
    }

    function decrement () {

        time-=1;

        $("#timerDisplay").html("<h2>" + time + " seconds left!" + "</h2>");

        if (time === 0) {
            stop();
            gameOver = true;
            $("#announcements").html("<h2>" + "Time's up!" + "</h2>");

            if ($("#oneStatus").attr("data") === "0") {
                console.log("status check works");
                $("#oneStatus").html("<h3>" + "TOO SLOW" + "</h3>")
            }
            if ($("#twoStatus").attr("data") === "0") {
                console.log("status check works");
                $("#twoStatus").html("<h3>" + "TOO SLOW" + "</h3>")
            }
            if ($("#threeStatus").attr("data") === "0") {
                console.log("status check works");
                $("#threeStatus").html("<h3>" + "TOO SLOW" + "</h3>")
            }
        }

    }

    function stop () {
        clearInterval(intervalId);
    }

};
