function JSONToHTMLTable(strArray) {
    let array = JSON.parse(strArray);
    let html = '<table>\n';
    let keys = Object.keys(array[0]);
    html += '\t<tr>';

    for (let key of keys) {
        html += `<th>${key}</th>`
    }
    html += '</tr>\n';

    for (let obj of array) {
        html += '\t<tr>';
        for (let i = 0; i < keys.length; i++) {
            html += `<td>${htmlEscape(String(obj[keys[i]]))}</td>`;
        }
        html += '</tr>\n';
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

JSONToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');