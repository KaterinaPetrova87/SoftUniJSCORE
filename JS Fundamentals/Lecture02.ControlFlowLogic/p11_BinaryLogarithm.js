function binaryLogarithm(arr) {
    arr = arr.map(Number);

    for (let num of arr) {
        console.log(Math.log2(num));
    }
}
