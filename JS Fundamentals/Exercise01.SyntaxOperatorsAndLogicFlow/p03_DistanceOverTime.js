function distanceOverTime(args) {
    let firstObjSpeed = args[0];
    let secondObjSpeed = args[1];
    let timeInSec = args[2];

    let distance1 = firstObjSpeed / 3.6 * timeInSec;
    let distance2 = secondObjSpeed / 3.6 * timeInSec;

    let delta = Math.abs(distance1 - distance2);

    console.log(delta);
}

distanceOverTime([0, 60, 3600]);