function countWordsWithMap(strArray) {
    let result = new Map();
    for (let line of strArray) {
        let words = line.toLowerCase().split(/[^0-9A-Za-z_]/).filter(w => w !== '');
        for (let word of words) {
            if(!result.has(word)){
                result.set(word, 1);
            } else {
                result.set(word, result.get(word) + 1);
            }
        }
    }
    let resultKeys = Array.from(result.keys()).sort((a, b) => a.localeCompare(b));
    for (let key of resultKeys) {
        console.log(`'${key}' -> ${result.get(key)} times`);
    }
}

countWordsWithMap(['Far too slow, you\'re far too slow.']);