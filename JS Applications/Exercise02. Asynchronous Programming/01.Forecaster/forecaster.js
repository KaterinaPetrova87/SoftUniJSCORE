function attachEvents() {
    const basicUrl = 'https://judgetests.firebaseio.com/';
    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    $('#submit').on('click', loadForecast);

    function loadForecast() {
        $.get(basicUrl + 'locations.json')
            .then(displayLocations)
            .catch(displayError);
    }

    function displayLocations(dataArr) {
        let inputLocation = $('#location').val();
        let code = dataArr.filter(loc => loc['name'] === inputLocation)
            .map(loc => loc['code'])[0];

        if (!code) {
            displayError();
        }

        let todayForecastRequest = $.get(basicUrl + `forecast/today/${code}.json `);
        let threeDaysForecastRequest = $.get(basicUrl + `forecast/upcoming/${code}.json`);

        Promise.all([todayForecastRequest, threeDaysForecastRequest])
            .then(displayWeather)
            .catch(displayError);
    }

    function displayWeather([weatherToday, upcomingWeather]) {
        $('#forecast').css('display', 'block');

        displayWeatherToday(weatherToday);
        displayUpcomingWeather(upcomingWeather);
    }

    function displayWeatherToday(weatherToday) {
        let current = $('#current');
        current.empty();

        current.append($('<div class="label">Current conditions</div>'))
            .append($(`<span class="condition symbol">${weatherSymbols[weatherToday['forecast']['condition']]}</span>`))
            .append($('<span class="condition">')
                .append($(`<span class="forecast-data">${weatherToday['name']}</span>`))
                .append($(`<span class="forecast-data">${weatherToday['forecast']['low']}${weatherSymbols['Degrees']}/${weatherToday['forecast']['high']}${weatherSymbols['Degrees']}</span>`))
                .append(`<span class="forecast-data">${weatherToday['forecast']['condition']}</span>`)
            );
    }

    function displayUpcomingWeather(upcomingWeather) {
        let upcoming = $('#upcoming');
        upcoming.empty();
        upcoming.append($('<div class="label">Three-day forecast</div>'))
        for (let obj of upcomingWeather['forecast']) {
                upcoming.append($('<span class="upcoming">')
                    .append($(`<span class="symbol">${weatherSymbols[obj['condition']]}</span>`))
                    .append($(`<span class="forecast-data">${obj['low']}${weatherSymbols['Degrees']}/${obj['high']}${weatherSymbols['Degrees']}</span>`))
                    .append($(`<span class="forecast-data">${obj['condition']}</span>`))
                );
        }
    }

    function displayError(err) {
        $('#forecast').css('display', 'block');
        $('#forecast').text(`Error: ${err.status} ${err.statusText}`);
    }
}