function squareOfStars(size) {
    function printStars(count) {
        console.log('* '.repeat(count).trim());
    }

    for (let i = 1; i <= size; i++) {
        printStars(size);
    }
}

squareOfStars(5);