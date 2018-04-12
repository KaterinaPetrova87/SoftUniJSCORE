function countWordsInAText(strArray) {
    let result = {};
    for (let line of strArray) {
        line = line.split(/[^0-9A-Za-z_]/).filter(w => w !== '');
        for (let word of line) {
            if(!result.hasOwnProperty(word)){
                result[word] = 0;
            }
            result[word]++;
        }
    }
    console.log(JSON.stringify(result));
}

countWordsInAText(["Far too slow, you're far too slow."]);