"use strict"

let num = 20;

while (true) {
    if (isDividable(num)) {
        alert(num);
        break;
    }
    num += 20;
}

function isDividable(num) {
    if (num % 11 == 0
        && num % 12 == 0
        && num % 13 == 0
        && num % 14 == 0
        && num % 15 == 0
        && num % 16 == 0
        && num % 17 == 0
        && num % 18 == 0
        && num % 19 == 0
        ) {
            return true;
        }
    return false;
}