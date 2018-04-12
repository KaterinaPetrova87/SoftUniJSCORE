function addAndRemoveElements(commands) {
    let result = [];
    for (let i = 1; i <= commands.length; i++) {
        if (commands[i - 1] === 'add') {
            result.push(i);
        } else if (commands[i - 1] === 'remove') {
            result.pop();
        }
    }
    if (result.length > 0) {
        result.forEach(e => console.log(e));
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['remove', 'remove', 'remove']);