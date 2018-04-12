function argumentInfo() {
    let argumentsCount = {};
    for (let arg of arguments) {
        console.log(`${typeof arg}: ${arg}`);
        if(!argumentsCount.hasOwnProperty(typeof arg)){
            argumentsCount[typeof arg] = 0;
        }
        argumentsCount[typeof arg]++;
    }
    let sortedArg = [];
    for (let arg in argumentsCount) {
        sortedArg.push([arg, argumentsCount[arg]]);
    }
    sortedArg = sortedArg.sort((a, b) => b[1] - a[1]);
    for (let arg of sortedArg) {
        console.log(`${arg[0]} = ${arg[1]}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });