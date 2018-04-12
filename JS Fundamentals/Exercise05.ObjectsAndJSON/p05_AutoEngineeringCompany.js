function autoEngineeringCompany(input) {
    let cars = new Map();
    for (let line of input) {
        let [car, model, producedCar] = line.split(/\s*\|\s*/);
        producedCar = Number(producedCar);
        let modelsMap = new Map();
        if (!cars.has(car)) {
            cars.set(car, modelsMap.set(model, producedCar));
        } else {
            if (!cars.get(car).has(model)) {
                cars.get(car).set(model, producedCar);
            } else{
                if(cars.get(car).has(model)){
                    cars.get(car).set(model, cars.get(car).get(model) + producedCar);
                }
            }
        }
    }
    for (let [k, v] of cars) {
        console.log(k);
        for (let [model, produced] of cars.get(k)) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);