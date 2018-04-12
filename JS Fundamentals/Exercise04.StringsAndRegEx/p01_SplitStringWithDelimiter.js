function splitAStringWithADelimiter(str, delimiter) {
    str.split(delimiter).forEach(e => console.log(e));
}

splitAStringWithADelimiter('One-Two-Three-Four-Five', '-');