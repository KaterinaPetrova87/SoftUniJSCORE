function getInfo() {
    let stopId = $('#stopId').val();
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json `;
    $('#buses').empty();
    $.get(url)
        .then(displayBusStopInfo)
        .catch(displayError)

    function displayBusStopInfo(busStopInfo) {
        let busNumbersArr = Object.keys(busStopInfo['buses']);
        let busStopName = busStopInfo['name'];
        $('#stopName').text(busStopName);

        for (let key of busNumbersArr) {
            $('#buses').append($(`<li>Bus ${key} arrives in ${busStopInfo['buses'][key]} minutes</li>`))
        }
    }

    function displayError() {
        $('#stopName').text('Error');
    }
}