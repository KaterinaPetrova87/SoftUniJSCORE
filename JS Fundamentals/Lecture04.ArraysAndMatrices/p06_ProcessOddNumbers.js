function processOddNumbers(arr) {
    console.log(arr.filter((el, i) => {
        return i % 2 === 1;
    }).map(el => el * 2).reverse());
}

processOddNumbers([10, 15, 20, 25]);