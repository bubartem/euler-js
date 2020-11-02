"use strict"

alert(calcEvenlyDivisible(20));

function calcEvenlyDivisible(maxN) {
    let num = maxN;

    while (true) {
        if (isDividable(num, maxN)) {
            return num;
        }
        num += maxN;
    }
}

function isDividable(num, maxN) {
    let check = true;
    for (let i = 1; i <= maxN; i++) {
        if (num % i != 0) {
            check = false;
            break;
        }
    }
    return check;
}