function aggregates(arr) {
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1)) {
            result = func(result, nextElement);
        }
        return result;
    }

    console.log('Sum = ' + reduce(arr, (a, b) => a + b));
    console.log('Min = ' + reduce(arr, (a, b) => a < b ? a : b));
    console.log('Max = ' + reduce(arr, (a, b) => a > b ? a : b));
    console.log('Product = ' + reduce(arr, (a, b) => a * b));
    console.log('Join = ' + reduce(arr, (a, b) => '' + a + b));
}

aggregates([5, -3, 20, 7, 0.5]);