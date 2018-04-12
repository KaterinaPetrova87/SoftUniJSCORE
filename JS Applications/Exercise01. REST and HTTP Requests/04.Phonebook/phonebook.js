$(function () {
    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook';

    function loadContacts() {
        $('#phonebook').empty();

        $.get(`${url}.json`)
            .then(displayContacts)
            .catch(displayError);
    }

    function displayContacts(contacts) {
        for (let key in contacts) {
            let person = contacts[key]['person'];
            let phone = contacts[key]['phone'];

            $('#phonebook').append($('<li>').text(`${person}: ${phone} `)
                .append($('<button>').text('[Delete]').on('click', function () {
                deleteContact(key)
            })));
        }
    }

    function displayError() {
        $('#phonebook').append($('<li>Error</li>'));
    }

    function createContact() {
        let contactJSON = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });

        $.post(`${url}.json`, contactJSON)
            .then(loadContacts)
            .catch(displayError);

        $('#person').val('');
        $('#phone').val('');
    }

    function deleteContact(key) {
        let deleteRequest = {
            method: 'DELETE',
            url: `${url}/${key}.json`
        };
        $.ajax(deleteRequest)
            .then(loadContacts)
            .catch(displayError);
    }
});