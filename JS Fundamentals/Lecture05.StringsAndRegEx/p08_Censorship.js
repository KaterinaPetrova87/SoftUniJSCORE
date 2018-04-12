function censorship(text, strArr) {
    for (let word of strArr) {
        let replacement = '-'.repeat(word.length);
        while (text.indexOf(word) != -1){
            text = text.replace(word, replacement);
        }
    }
    return text;
}

console.log(censorship('roses are red, violets are blue', [', violets are', 'red']));