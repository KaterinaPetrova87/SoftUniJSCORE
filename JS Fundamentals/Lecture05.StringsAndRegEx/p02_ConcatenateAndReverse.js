function concatenateAndReverse(strArr) {
    let str = strArr.join('');
    let reversedArr = str.split('').reverse();
    let reversedStr = reversedArr.join('');
    console.log(reversedStr);
    //console.log(strArr.join('').split('').reverse().join(''));
}

concatenateAndReverse(['I', 'am', 'student']);