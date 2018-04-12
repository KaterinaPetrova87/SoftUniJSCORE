function matchAllWords(text) {
    let words = text.match(/\w+/g);
    return words.join('|');
}

console.log(matchAllWords('_(Underscores) are also word characters'));