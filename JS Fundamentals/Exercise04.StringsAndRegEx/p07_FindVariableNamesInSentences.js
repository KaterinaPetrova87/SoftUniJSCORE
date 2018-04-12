function findVariableNamesInSentence(str) {
    let regex = /\b_[A-Za-z0-9]+\b/g;
    let match = regex.exec(str);
    let result = [];

    while (match != null){
        result.push(match[0]);
        match = regex.exec(str);
    }
    console.log(result.map(e => e.substring(1)).join(','));
}

findVariableNamesInSentence('Calculate the _area of the _perfectRectangle object.');