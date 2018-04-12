function palindrome(input) {
    let reversed = input.split(' ')
        .reverse()
        .join(' ');
    if (reversed === input) {
        return true;
    }
    return false;
}

console.log(palindrome('abba'));