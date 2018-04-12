function modifyAverage(number) {
    let numberAsStr = number.toString();
    let sum = sumDigits(numberAsStr);
    while (sum / numberAsStr.length <= 5) {
        numberAsStr += 9;
        sum = sumDigits(numberAsStr);
    }
    console.log(numberAsStr);

    function sumDigits(numberAsStr) {
        let sum = 0;
        for (let digit of numberAsStr) {
            sum += Number(digit);
        }
        return sum;
    }
}

modifyAverage(101);