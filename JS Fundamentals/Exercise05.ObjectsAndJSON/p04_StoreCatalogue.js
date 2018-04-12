function storeCatalogue(input) {
    let products = {};
    for (let line of input) {
        let [product, price] = line.split(/\s*:\s*/);
        products[product] = price;
    }
    let initials = new Set();
    for (let key of Object.keys(products)) {
        initials.add(key[0]);
    }

    for (let key of Array.from(initials.keys()).sort()) {
        console.log(key);
        for (let product of Array.from(Object.keys(products).filter(k => k.startsWith(key))).sort()) {
            console.log(`\t${product}: ${products[product]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);