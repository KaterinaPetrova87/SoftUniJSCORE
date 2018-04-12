function functionalCalculator(num1, num2, operator) {
    let add = function (a, b) {
        return a + b;
    };
    let subtract = function (a, b) {
        return a - b;
    };
    let multiply = function (a, b) {
        return a * b;
    };
    let divide = function (a, b) {
        return a / b;
    };

    switch (operator) {
        case '+':
            return add(num1, num2);
        case  '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

console.log(functionalCalculator(3, 5, '*'));