function matchTheDates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let match = regex.exec(input);

    while (match != null){
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        match = regex.exec(input);
    }
}

matchTheDates('I am born on 30-Dec-1994.\nThis is not date: 512-Jan-1996.\nMy father is born on the 29-Jul-1955.');