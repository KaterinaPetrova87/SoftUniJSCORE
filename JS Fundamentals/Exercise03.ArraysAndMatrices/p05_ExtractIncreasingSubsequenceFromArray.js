function extractIncreasingSubsequenceFromArray(arr) {
    let currentMax = arr[0];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentMax) {
            currentMax = arr[i];
            result.push(currentMax);
        }
    }
    result.forEach(e => console.log(e));
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);