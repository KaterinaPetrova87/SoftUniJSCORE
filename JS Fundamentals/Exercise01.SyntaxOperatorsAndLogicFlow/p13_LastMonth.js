function lastMonth([day, month, year]) {
    let newDate = new Date(year, month-1, 0);
    let daysCount = newDate.getDate();

    console.log(daysCount);
}

lastMonth([13, 12, 2004]);