function insideVolume(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        let x = arr[i];
        let y = arr[i + 1];
        let z = arr[i + 2];

        if (inVolume(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function inVolume(x, y, z) {
        let x1 = 10, x2 = 50, y1 = 20, y2 = 80, z1 = 15, z2 = 50;
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2) {
            return true;
        }
        return false;
    }
}

insideVolume([8, 20, 22]);