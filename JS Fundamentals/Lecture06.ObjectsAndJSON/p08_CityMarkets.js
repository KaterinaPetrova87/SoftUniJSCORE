function cityMarkets(strArray) {
    let townsWithProducts = new Map();
    for (let line of strArray) {
        let [town, product, value] = line.split(/\s*->\s*/);
        let multiply = value.split(/\s*:\s*/).map(x => Number(x)).reduce((a, b) => a * b);
        if (!townsWithProducts.has(town)) {
            let productMap = new Map();
            productMap.set(product, multiply);
            townsWithProducts.set(town, productMap);
        } else {
            if (!townsWithProducts.get(town).has(product)) {
                townsWithProducts.get(town).set(product, multiply);
            } else {
                townsWithProducts.get(town).set(product, townsWithProducts.get(product) + multiply);

            }
        }
    }
    for (let [key, value] of townsWithProducts) {
        console.log(`Town - ${key}`);
        for (let [product, multiply] of townsWithProducts.get(key)) {
            console.log(`$$$${product} : ${multiply}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])