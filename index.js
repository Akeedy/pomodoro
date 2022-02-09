var countdownSecond = 1500;
var timerStart = false;
// var countdownSecond = 10;



function startTimer() {
    countdownSecond = countdownSecond - 1;
    var minutes = Math.floor(countdownSecond / 60);
    var seconds = Math.floor(countdownSecond % 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("timer").innerHTML =
        minutes + ":" + seconds;

    if (countdownSecond < 0) {
        clearInterval(startTimer);
        document.getElementById("timer").innerHTML =
            "Done!";
    }
}