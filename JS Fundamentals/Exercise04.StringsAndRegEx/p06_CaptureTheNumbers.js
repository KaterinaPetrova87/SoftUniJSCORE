function captureTheNumbers(str) {
    let numbers = [];
    let regex = /\d+/g;

    for (let line of str) {
        let match = regex.exec(line);
        while (match) {
            numbers.push(match[0]);
            match = regex.exec(line);
        }
    }
    console.log(numbers.join(' '));
}

captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);