function scoreToHTML(strArray) {
    let array = JSON.parse(strArray);
    let html = '<table>\n';
    let keys = Object.keys(array[0]);
    html += `\t<tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;

    for (let obj of array) {
        html += `\t<tr><td>${htmlEscape(obj[keys[0]])}</td><td>${obj[keys[1]]}</td></tr>\n`;
    }
    html += '</table>';

    console.log(html);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');