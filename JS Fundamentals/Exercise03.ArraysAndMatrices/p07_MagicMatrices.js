function magicMatrix(matrix) {
    let firstRowSum = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 1; row < matrix.length; row++) {
        let currentRowSum = 0;
        currentRowSum = matrix[row].reduce((a, b) => a + b, 0);
        if (currentRowSum !== firstRowSum) {
            return false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let currentColSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currentColSum += matrix[col][row]
        }
        if (currentColSum !== firstRowSum) {
            return false;
        }
    }
    return true;
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));