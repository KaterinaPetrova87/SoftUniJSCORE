function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let x = event.offsetX;
        let percent = Math.trunc((x / this.clientWidth) * 100);
        result.textContent = percent + '%';
        console.log(event)
    }

    function gradientOut() {
        result.textContent = '';
    }
}