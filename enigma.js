"use strict"

let isPlay = true;

while (isPlay) {
    let maxValue = confirm("Hard mode") ? 6728 : 100;

    let riddle = Math.floor(Math.random() * (maxValue + 1));
    let isWin = false;

    while (!isWin) {
        let guess = prompt('Right number?');
        if (guess == riddle) {
            alert('Amazing!');
            isWin = true;
        }
        else {
            if (guess > riddle) {
                alert('Too high');
            }
            else {
                alert('Too low');
            }
        }
    }

    isPlay = confirm("Another round?");
}