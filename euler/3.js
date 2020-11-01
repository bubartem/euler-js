"use strict"

const N = 600851475143;

let sqrtN = Math.floor(N ** 0.5);
let maxDiv = 1;

for (let i = 2; i < sqrtN; i++) {
    if (N % i != 0) continue;

    let i2 = N / i;
    if (isPrime(i2)) {
        maxDiv = i;
        break;
    }
    if (isPrime(i)) {
        maxDiv = i;
    }
}

alert(maxDiv);