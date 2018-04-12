function cookingByNumber(array) {
    let number = Number(array[0]);

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => x + 1;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    for (let i = 1; i < array.length; i++) {
        switch (array[i]) {
            case 'chop':
                number = chop(number);
                console.log(number);
                break;
            case 'dice':
                number = dice(number);
                console.log(number);
                break;
            case 'spice':
                number = spice(number);
                console.log(number);
                break;
            case 'bake':
                number = bake(number);
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}

cookingByNumber([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);