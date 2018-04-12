function dayOfWeek(day) {
    let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = array.indexOf(day);
    return index > -1 ? index + 1 : 'error';
}

console.log(dayOfWeek('Sunday'));