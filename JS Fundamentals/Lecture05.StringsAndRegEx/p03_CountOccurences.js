function countOccurences(word, text) {
    let counter = 0;
    let index = text.indexOf(word);

    while (index != -1){
        counter++;
        index = text.indexOf(word, index + 1);
    }

    console.log(counter);
}

countOccurences('the', 'The quick brown fox jumps over the lay dog.');