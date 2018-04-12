function oddEven(num) {
    if (num % 2 === 0) {
        console.log('even');
    } else if (Math.round(num % 2) === num % 2) {
        console.log('odd');
    } else {
        console.log('invalid');
    }
}

oddEven(3);