"use strict"

function isPrime(n) {
    if (Math.trunc(n) != n) {
        return false;
    }
    if (n < 2) {
        return false;
    }

    if (n == 2) {
        return true;
    }
    if (n % 2 == 0) {
        return false;
    }
    
    let sqrtn = Math.floor(n ** 0.5);
    for (let i = 3; i < sqrtn; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
