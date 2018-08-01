window.onload = function() {

    // global variables
    var intervalId;
    var clockRunning = false;
    var time = 20;
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
            $("#announcements").html("<h2>" + "Good luck!" + "</h2>");
            $("#questionOne").text("1. A pound of sand weighs more than a pound of feathers.");
            $("#questionTwo").text("2. In Switzerland, it is illegal to own only a single guinea pig.");
            $("#questionThree").text("3. Theodore Roosevelt once owned a pet hyena.");
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
                $("#oneStatus").html("<h3>" + "TOO SLOW" + "</h3>")
            }
            if ($("#twoStatus").attr("data") === "0") {
                $("#twoStatus").html("<h3>" + "TOO SLOW" + "</h3>")
            }
            if ($("#threeStatus").attr("data") === "0") {
                $("#threeStatus").html("<h3>" + "TOO SLOW" + "</h3>")
            }
        }

    }

    function stop () {
        clearInterval(intervalId);
    }

};
