function startsWith(str, substr) {
    if(str.startsWith(substr)){
        return true;
    } else {
        return false;
    }
}

console.log(startsWith('How have you been?', 'how'));
console.log(startsWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));