function templateFormat(input) {
    let result = '';
    result += '<?xml version="1.0" encoding="UTF-8"?>\n';
    result += '<quiz>\n';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result += drawQuestion(input[i]);
        } else {
            result += drawAnswer(input[i]);
        }
    }
    result += '</quiz>\n';

    console.log(result);

    function drawQuestion(question) {
        let result = '\t<question>\n';
        result += `\t${question}\n`;
        result += '\t</question>\n';
        return result;
    }

    function drawAnswer(answer) {
        let result = "\t<answer>\n";
        result += `\t${answer}\n`;
        result += "\t</answer>\n";
        return result;
    }
}

templateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);