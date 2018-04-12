function evenPositionElements(arr) {
    let result = [];
    for (let i in arr) {
        if (i % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result.join(' ');
}

console.log(evenPositionElements([1, 2, 3, 4, 5, 6]));