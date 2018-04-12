function expressionSplit(str) {
    str.split(/[\s.();,]+/).forEach(e => console.log(e));
}

expressionSplit('let sum = 1 + 2;if(sum > 2){    console.log(sum);}');