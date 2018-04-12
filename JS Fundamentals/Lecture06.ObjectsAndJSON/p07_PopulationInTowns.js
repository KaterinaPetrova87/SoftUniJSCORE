function populationInTowns(strArray) {
    let result = new Map();
    for (let line of strArray) {
        let [town, population] = line.split(/\s*<->\s*/);
        population = Number(population);
        if(result.has(town)){
            result.set(town, result.get(town) + population);
        } else{
            result.set(town, population);
        }
    }
    for (let [k,v] of result) {
        console.log(`${k} : ${v}`);
    }
}

populationInTowns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);