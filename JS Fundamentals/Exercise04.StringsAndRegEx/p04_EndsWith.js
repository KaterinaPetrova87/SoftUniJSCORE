function endsWith(str, substr) {
    if(str.endsWith(substr)){
        return true;
    } else {
        return false;
    }
}

console.log(endsWith('This sentence ends with fun?', 'fun?'));