"use strict"

let maxPal = 0;

for (let a = 999; a >= 100; a--) {
    for (let b = a; b >= 100; b--) {
        let num = a * b;
        if (maxPal < num && isPalindromic(num)) {
            maxPal = num;
        }
    }
}

alert(maxPal);

function isPalindromic(num) {
    num += '';
    if (num.length == 6) {
        if (num[0] == num[5]
            && num[1] == num[4]
            && num[2] == num[3]
        ) {
            return true;
        }
    }
    else {
        if (num[0] == num[4]
            && num[1] == num[3]
        ) {
            return true;
        }
    }
    return false;
}