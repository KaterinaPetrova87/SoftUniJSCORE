function cone(radius, height) {
    let volume = (Math.PI*radius*radius*height)/3;
    let slantHeight = Math.sqrt(radius*radius + height*height);
    let baseSurfaceArea = Math.PI*radius*radius;
    let lateralSurfaceArea = Math.PI*radius*slantHeight;
    let totalSurfaceArea = baseSurfaceArea+lateralSurfaceArea;

    console.log('volume = ' + volume);
    console.log('area = ' + totalSurfaceArea);
}

cone(3,5);