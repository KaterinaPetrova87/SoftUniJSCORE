function validityChecker([x1, y1, x2, y2]) {
    function checkValidity(x1, y1, x2, y2) {
        let deltaX = x2 - x1;
        let deltaY = y2 - y1;
        let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        if (distance === Math.round(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    checkValidity(x1, y1, 0, 0);
    checkValidity(x2, y2, 0, 0);
    checkValidity(x1, y1, x2, y2);
}

validityChecker([3, 0, 0, 4]);