function distanceIn3D([x1, y1, z1, x2, y2, z2]) {
    let deltaX = x1 - x2;
    let deltaY = y1 - y2;
    let deltaZ = z1 - z2;

    let distance = Math.sqrt(deltaX ** 2 + deltaY ** 2 + deltaZ ** 2);
    console.log(distance);
}

distanceIn3D([3.5, 0, 1, 0, 2, -1]);