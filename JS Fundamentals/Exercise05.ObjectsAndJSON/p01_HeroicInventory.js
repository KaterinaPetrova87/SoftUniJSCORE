function heroicInventory(input) {
    let result = [];
    for (let line of input) {
        let tokens = line.split(/\s*\/\s*/);
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let items = [];
        if(tokens.length > 2){
            items = tokens[2].split(/\s*,\s*/);
        }
        let heroes = {name: heroName, level:heroLevel, items:items};
        result.push(heroes);
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);