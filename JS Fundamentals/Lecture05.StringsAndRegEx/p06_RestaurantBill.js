function restaurantBill(array) {
    let products = [];
    let prices = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            products.push(array[i]);
        } else {
            prices.push(Number(array[i]));
        }
    }

    let totalSum = prices.reduce((a, b) => a + b, 0);
    console.log(`You purchased ${products.join(', ')} for a total sum of ${totalSum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);