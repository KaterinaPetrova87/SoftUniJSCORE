function printArrayWithDelimiter(arr) {
    let delimiter = arr[arr.length - 1];
    let result = '';

    for (let i = 0; i < arr.length - 1; i++) {
        if (i === 0) {
            result += arr[i];
        } else {
            result += `${delimiter}${arr[i]}`;
        }
    }
    console.log(result);
}

printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);