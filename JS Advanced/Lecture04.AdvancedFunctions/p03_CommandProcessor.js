function commandProcessor(strArr) {
    let processor = (function () {
        let text = '';
        return function (strArr) {
            let tokens = strArr.split(' ');

            switch (tokens[0]) {
                case 'append':
                    text += tokens[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(tokens[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0, text.length - Number(tokens[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })();
    for (let command of strArr) {
        processor(command);
    }
}

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);