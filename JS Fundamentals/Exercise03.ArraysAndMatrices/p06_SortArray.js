function sortArray(arr) {
    let sortedArr = arr.sort().sort((a, b) => a.length - b.length).forEach(e => console.log(e));
}

sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);