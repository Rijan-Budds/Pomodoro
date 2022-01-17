const pomodoro = document.getElementById('pomodoro');

let min = 0;
let sec = 0;
var stopWork = true;

function starkWorking(){
    if (stopWork == true) {
        stopWork = false;
        timerCycle ();
    }
}

function stopWorking(){
    if (stopWork == false) {
        stopWork = true;
    }
}

function resetTimer(){
    timer.innerHTML = "00:00";
    stopWork = true;
    min = 0;
    sec = 0;
}

function timerCycle(){
    if (stopWork == false){
        second = parseInt(second);
        minute = parseInt(minute);

        second = second + 1;

        if (second == 60){
            minute = minute + 1;
            second = 0;
        }

    
    }
}