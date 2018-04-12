function gradsToDegrees(grads) {
    let degrees = (grads * 3.6 / 4) % 360;
    if (degrees < 0) {
        degrees += 360;
    }
    console.log(degrees);
}

gradsToDegrees(100);