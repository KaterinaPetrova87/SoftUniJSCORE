function townsToJSON(array) {
    let towns = [];
    for (let line of array.slice(1)) {
        line = line.split(/\s*\|\s*/).filter(e => e != '');
        let obj = {Town: line[0], Latitude: Number(line[1]), Longitude: Number(line[2])};
        towns.push(obj);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);