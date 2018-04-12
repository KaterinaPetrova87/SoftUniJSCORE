function diagonalAttack(input) {
    let matrix = [];
    for (let el of input) {
        let numArr = el.split(' ').map(Number);
        matrix.push(numArr);
    }
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstSum += matrix[i][i];
        secondSum += matrix[i][matrix.length - 1 - i];
    }
    if (firstSum === secondSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && row + col !== matrix.length - 1) {
                    matrix[row][col] = firstSum;
                }
            }
        }
    }
    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);