const chrono = document.getElementById("chrono");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const zero = document.getElementById("zero");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

function stopWatch () {
    if (milliseconds < 99) {
        milliseconds++;
    }
    else {
        milliseconds = 0;
        if (seconds < 59) {
            seconds++;
        }
        else {
            seconds = 0;
            if (minutes < 59) {
                minutes++;
            }
            else {
                minutes = 0;
            }
        }
    }
    chrono.innerHTML = isLessThan10(minutes) + ":" + isLessThan10(seconds) + ":" + isLessThan10(milliseconds);
    timer = setTimeout(stopWatch, 10);
}

function pause () {
    clearTimeout(timer);
}

function reset () {
    chrono.innerHTML = "00:00:00";
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
}

function isLessThan10 (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

start.addEventListener("click", stopWatch);
stop.addEventListener("click", pause);
zero.addEventListener("click", reset);

