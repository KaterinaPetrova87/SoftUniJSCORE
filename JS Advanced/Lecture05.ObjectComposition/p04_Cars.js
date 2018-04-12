function cars(array) {
    let commandExecutor = (function () {
        let result = {};
        function create(args) {
            let name = args[0];
            if(args.length > 2){
                let parentName = args[2];
                result[name] = Object.create(result[parentName]);
            } else {
                result[name] = {};
            }
        }

        function set(args) {
            let name = args[0];
            let key = args[1];
            let value = args[2];
            result[name][key] = value;
        }

        function print(args) {
            let name = args[0];
            let output = [];
            for (let key in result[name]) {
                output.push(`${key}:${result[name][key]}`);
            }
            console.log(output.join(', '));
        }

        return {create, set, print};
    })();

    for (let comm of array) {
        let tokens = comm.split(' ');
        let action = tokens.shift();
        commandExecutor[action](tokens);
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);