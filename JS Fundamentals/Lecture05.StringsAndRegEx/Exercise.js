function extractText(text) {
    let startIndex = text.indexOf('(');
    let result = [];

    while (startIndex !== -1){
        let endIndex = text.indexOf(')');
        if(endIndex === -1){
            break;
        }
        let subText = text.substring(startIndex + 1, endIndex);
        result.push(subText);
        startIndex = text.indexOf('(', endIndex);
    }
    console.log(result.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');