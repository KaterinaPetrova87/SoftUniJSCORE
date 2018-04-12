function compoundInterest(numbers) {
    let principalSum = numbers[0];
    let interestRate = numbers[1];
    let compoundingPeriod = numbers[2];
    let timespan = numbers[3];

    let compoundInterest = principalSum * Math.pow(1 + interestRate / (100 * (12 / compoundingPeriod)), 12 / compoundingPeriod * timespan);
    console.log(compoundInterest.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);