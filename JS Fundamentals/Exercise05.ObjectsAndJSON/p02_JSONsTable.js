function jsonTable(input) {
    let html = '<table>\n';
    for(let row of input){
        let parsed = JSON.parse(row);
        html += '\t<tr>\n';
        html += '\t\t<td>' + parsed.name + '</td>\n';
        html += '\t\t<td>' + parsed.position + '</td>\n';
        html += '\t\t<td>' + parsed.salary + '</td>\n';
        html += '\t<tr>\n';
    }
    html += '</table>';
    console.log(html);

    function htmlEscape(str) {
        return str.repeat(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);