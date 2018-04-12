function listProcessor(arr) {
    let commandProcessor = (function () {
        let result = [];
        return {
            add: function (str) {
                result.push(str);
            },
            remove: function (str) {
                result = result.filter(x => x != str);
            },
            print: function () {
                console.log(result.join(','));
            }
        }
    })();

    for (let comm of arr) {
        let [command, str] = comm.split(' ');
        commandProcessor[command](str);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);