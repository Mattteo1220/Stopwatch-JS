let clock = document.getElementById("clock");
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let Interval;
    let clockValue = "";

    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let resetBtn = document.getElementById("reset");

    function setClock(){
        milliseconds += 1;
        if(milliseconds >= 99){
            seconds += 1;
            milliseconds = 0;
        }

        if(seconds >= 59){
            seconds = 0;
            minutes += 1;
        }

        if(minutes >= 59){
            seconds = 0;
            hours += 1;
        }

        let hourVal = hours < 10 ? `0${hours}` : hours;
        let minuteVal = minutes < 10 ? `0${minutes}` : minutes;
        let secondVal = seconds < 10 ? `0${seconds}` : seconds;
        let millisecondVal = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

        clockValue = `${hourVal}:${minuteVal}:${secondVal}:${millisecondVal}`;
        clock.innerHTML = clockValue;
    }

    startBtn.addEventListener("click", () => {
        clearInterval(Interval);
        Interval = setInterval(setClock, 10);
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(Interval);
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(Interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        clock.innerHTML = "00:00:00:00";
    });