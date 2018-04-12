function timer() {
    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);

    let time = 0;
    let interval;
    let isRunning = false;

    function startTimer() {
        if(!isRunning) {
            interval = setInterval(() => {
                time++;
                $('#hours').text(("0" + Math.trunc(time / 3600)).slice(-2));
                $('#minutes').text(("0" + Math.trunc((time / 60) % 60)).slice(-2));
                $('#seconds').text(("0" + Math.trunc(time % 60)).slice(-2));
            }, 1000);
            isRunning = true;
        }
    }

    function stopTimer() {
        clearInterval(interval);
        isRunning = false;
    }
}