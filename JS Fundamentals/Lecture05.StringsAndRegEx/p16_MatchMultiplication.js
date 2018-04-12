function matchMultiplication(str) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    let match = regex.exec(str);

    while (match != null){
        let replacement = Number(match[1]) * Number(match[2]);
        str = str.replace(match[0], replacement);
        match = regex.exec(str);
    }
    console.log(str);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')