function lastKNumbersSequence(n, k) {
    let resultArr = [1];
    for (let i = 1; i < n; i++) {
        resultArr[i] = resultArr.slice(Math.max(0, resultArr.length - k), i + k).reduce((a, b) => {
            return a + b;
        }, 0);
    }

    console.log(resultArr);
}

lastKNumbersSequence(9, 5);