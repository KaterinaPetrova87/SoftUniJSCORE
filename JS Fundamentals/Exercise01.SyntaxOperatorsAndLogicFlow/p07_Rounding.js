function rounding([number, precision]) {
    if (precision > 15) {
        precision = 15;
    }
    number = number.toFixed(precision);
    console.log(Number(number));
}

rounding([10.5, 3]);