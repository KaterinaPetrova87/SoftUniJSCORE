function attachEvents() {
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_S1hrGsU9G/biggestCatches';
    const username = 'katerina';
    const password = 'ka';
    const authorization = btoa(`${username}:${password}`);

    $('.load').on('click', loadCatches);
    $('.add').on('click', addNewCatch);

    function loadCatches() {
        $.ajax({
            url: baseUrl,
            headers: {
                Authorization: 'Basic ' + authorization
            },
            method: 'GET',
            success: displayCatches,
            error: displayError
        });
    }

    function addNewCatch() {
        let catchElement = $('#addForm');
        let dataObj = createDataJSON(catchElement);

        $.ajax({
            url: baseUrl,
            headers: {
                Authorization: 'Basic ' + authorization
            },
            method: 'POST',
            data: dataObj,
            success: loadCatches,
            error: displayError
        });
    }

    function displayCatches(catches) {
        $('#catches').empty();
        for (let obj of catches) {
            let dataId = obj['_id'];
            $('#catches').append($(`<div class="catch" data-id="${dataId}"></div>`)
                .append($('<label>Angler</label>'))
                .append($(`<input type="text" class="angler" value="${obj['angler']}">`))
                .append($('<label>Weight</label>'))
                .append($(`<input type="number" class="weight" value="${obj['weight']}">`))
                .append($('<label>Species</label>'))
                .append($(`<input type="text" class="species" value="${obj['species']}">`))
                .append($('<label>Location</label>'))
                .append($(`<input type="text" class="location" value="${obj['location']}">`))
                .append($('<label>Bait</label>'))
                .append($(`<input type="text" class="bait" value="${obj['bait']}">`))
                .append($('<label>Capture Time</label>'))
                .append($(`<input type="number" class="captureTime" value="${obj['captureTime']}">`))
                .append($('<button class="update">Update</button>').on('click', updateCatch))
                .append($('<button class="delete">Delete</button>').on('click', deleteCatch))
            );
        }
    }

    function updateCatch() {
        let catchElement = $(this).parent();
        let dataObj = createDataJSON(catchElement);

        let catchId = catchElement.attr('data-id');

        $.ajax({
            url: baseUrl + `/${catchId}`,
            method: 'PUT',
            headers: {
                Authorization: 'Basic ' + authorization
            },
            data: dataObj,
            success: loadCatches,
            error: displayError
        });
    }

    function createDataJSON(catchElement) {
        return JSON.stringify({
            angler: catchElement.find('.angler').val(),
            weight: +catchElement.find('.weight').val(),
            species: catchElement.find('.species').val(),
            location: catchElement.find('.location').val(),
            bait: catchElement.find('.bait').val(),
            captureTime: +catchElement.find('.captureTime').val()
        });
    }

    function deleteCatch() {
        let catchElement = $(this).parent();
        let catchId = catchElement.attr('data-id');

        $.ajax({
            url: baseUrl + `/${catchId}`,
            method: 'DELETE',
            headers: {
                Authorization: 'Basic ' + authorization
            },
            success: loadCatches,
            error: displayError
        });
    }

    function displayError(err) {
        alert(`Error: ${err.statusText}`);
    }
}