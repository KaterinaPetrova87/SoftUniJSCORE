$(function () {
    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createNewContact);
    let url = 'https://phonebook-33a25.firebaseio.com/phonebook';

    function loadContacts() {
        $('#phonebook').empty();

        $.get('https://phonebook-33a25.firebaseio.com/phonebook/.json')
            .then(displayContacts)
            .catch(displayError);

        function displayContacts(contacts) {
            for (let key in contacts) {
                let person = contacts[key]['person'];
                let phone = contacts[key]['phone'];
                let li = $(`<li>${person}: ${phone} </li>`);
                li.append($('<a href="#">[Delete]</a>').on('click', function () {
                    deleteContact(key);
                }));
                $('#phonebook').append(li);
            }
        }

        function displayError() {
            $('#phonebook').append($('<li>Error</li>'));
        }

        function deleteContact(key) {
            let deleteRequest = {
                method: 'DELETE',
                url: `${url}/${key}.json`
            };
            $.ajax(deleteRequest)
                .then(loadContacts)
                .catch(displayError)
        }
    }
    function createNewContact() {
        let newContact = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });

        $.post(url + '.json', newContact)
            .then(loadContacts)
            .catch(displayError);

        function displayError() {
            $('#phonebook').append($('<li>Error</li>'));
        }

        $('#person').val('');
        $('#phone').val('');
    }
});