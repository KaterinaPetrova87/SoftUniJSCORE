function aggregateTable(array) {
    let sum = 0;
    let list = [];
    for (let line of array) {
        let townData = line.split('|');
        let townName = townData[1].trim();
        let income = Number(townData[2].trim());
        list.push(townName);
        sum += income;
    }
    console.log(list.join(', '));
    console.log(sum);
}

aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);