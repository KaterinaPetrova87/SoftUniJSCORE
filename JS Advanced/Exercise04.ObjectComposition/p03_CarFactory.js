function carFactory(initialCarParts) {
    let modifiedCar = {};

    modifiedCar.model = initialCarParts.model;

    let engine = {};
    if (initialCarParts.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    } else if (initialCarParts.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        };
    } else {
        engine = {
            power: 200,
            volume: 3500
        };
    }

    modifiedCar.engine = engine;

    modifiedCar.carriage = {
        type: initialCarParts.carriage,
        color: initialCarParts.color
    };

    let wheels = [];
    for (let i = 0; i < 4; i++) {
        if (initialCarParts.wheelsize % 2 === 0){
            wheels.push(initialCarParts.wheelsize - 1);
        } else {
            wheels.push(initialCarParts.wheelsize);
        }
    }

    modifiedCar.wheels = wheels;

    return modifiedCar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));