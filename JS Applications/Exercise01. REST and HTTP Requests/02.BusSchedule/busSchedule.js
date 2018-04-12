function solve() {
    let currentId = 'depot';
    let oldName = '';

    function depart() {
        let request = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: displayData,
            error: displayError
        };
        $.ajax(request);
    }

    function arrive() {
        $('#info').find('span').text(`Arriving at ${oldName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }

    function displayData(data) {
        $('#info').find('span').text(`Next stop ${data.name}`);
        currentId = data['next'];
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', false);
        oldName = data.name;
    }

    function displayError() {
        $('#info').find('span').text('Error');
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', true);
    }

    return {
        depart,
        arrive
    };
}
let result = solve();