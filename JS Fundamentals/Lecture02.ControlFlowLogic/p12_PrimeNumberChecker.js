function primeNumberChecker(num) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }

    return isPrime && num > 1;
}

console.log(primeNumberChecker(7));