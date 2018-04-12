function startApp() {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_S1Fl2jicz';
    const APP_SECRET = 'c1ddff027f36412ebfbaf68d20b113f6';
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

    showHideMenuLinks();
    showView('viewHome');

    $('#linkHome').on('click', showHomeView);
    $('#linkLogin').on('click', showLoginView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkListAds').on('click', listAds);
    $('#linkLogout').on('click', logoutUser);
    $('#linkCreateAd').on('click', showCreateAdvertView);

    $('#buttonLoginUser').on('click', loginUser);
    $('#buttonRegisterUser').on('click', registerUser);
    $('#buttonCreateAd').on('click', createAdvert);
    $('#buttonEditAd').on('click', editAdvert);

    $("#infoBox, #errorBox").on('click', function () {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    function loginUser() {
        let username = $('#formLogin input[name=username]').val();
        let password = $('#formLogin input[name=passwd]').val();

        $.ajax({
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            method: 'POST',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            sessionStorage.setItem('username', res['username']);
            sessionStorage.setItem('authToken', res['_kmd']['authtoken']);
            sessionStorage.setItem('userId', res['_id']);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }).catch(displayError)
    }

    function registerUser() {
        let username = $('#formRegister input[name=username]').val();
        let password = $('#formRegister input[name=passwd]').val();

        $.ajax({
            url: BASE_URL + 'user/' + APP_KEY + '/',
            method: 'POST',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            sessionStorage.setItem('username', res['username']);
            sessionStorage.setItem('authToken', res['_kmd']['authtoken']);
            sessionStorage.setItem('userId', res['_id']);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }).catch(displayError)
    }

    function logoutUser() {
        sessionStorage.clear();
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
        $('#loggedInUser').text('');
    }

    function listAds() {
        $('#ads').empty();
        showView('viewAds');
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
            headers: {
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            }
        }).then(function (adverts) {
            if (adverts.length === 0) {
                $('#ads').text('No advertisements available.');
            } else {
                let table = $('<table>');
                $(table).append($('<tr>')
                    .append($('<th>Title</th>'))
                    .append($('<th>Description</th>'))
                    .append($('<th>Publisher</th>'))
                    .append($('<th>Date Published</th>'))
                    .append($('<th>Price</th>'))
                    .append($('<th>Actions</th>')));

                for (let advert of adverts) {
                    let readMoreLink = $('<a href="#">[Read More]</a>').on('click', function () {
                        displayAdvert(advert);
                    });

                    let links = [readMoreLink];

                    if (advert['_acl']['creator'] === sessionStorage.getItem('userId')) {
                        let deleteLink = $('<a href="#">[Delete]</a>').on('click', function () {
                            deleteAdvert(advert);
                        });
                        let editLink = $('<a href="#">[Edit]</a>').on('click', function () {
                            loadAdvertForEdit(advert);
                        });

                        links = [readMoreLink, ' ', deleteLink, ' ', editLink];
                    }

                    table.append($('<tr>')
                        .append($(`<td>${advert['title']}</td>`))
                        .append($(`<td>${advert['description']}</td>`))
                        .append($(`<td>${advert['publisher']}</td>`))
                        .append($(`<td>${advert['date']}</td>`))
                        .append($(`<td>${advert['price']}</td>`))
                        .append($('<td>').append(links)));
                }
                $('#ads').append($(table));
            }
        }).catch(displayError)
    }

    function deleteAdvert(advert) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + advert['_id'],
            headers: {
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            }
        }).then(function () {
            listAds();
            showInfo('Advert deleted.');
        }).catch(displayError)
    }

    function loadAdvertForEdit(advert) {
        $('#formEditAd input[name=id]').val(advert['_id']);
        $('#formEditAd input[name=publisher]').val(advert['publisher']);
        $('#formEditAd input[name=title]').val(advert['title']);
        $('#formEditAd textarea[name=description]').val(advert['description']);
        $('#formEditAd input[name=datePublished]').val(advert['date']);
        $('#formEditAd input[name=price]').val(advert['price']);
        $('#formEditAd input[name=image]').val(advert['image']);
        showView('viewEditAd');
    }

    function editAdvert() {
        let id = $('#formEditAd input[name=id]').val();
        let publisher = $('#formEditAd input[name=publisher]').val();
        let title = $('#formEditAd input[name=title]').val();
        let description = $('#formEditAd textarea[name=description]').val();
        let date = $('#formEditAd input[name=datePublished]').val();
        let price = $('#formEditAd input[name=price]').val();
        let image = $('#formEditAd input[name=image]').val();

        $.ajax({
            method: 'PUT',
            url: `${BASE_URL}appdata/${APP_KEY}/advertisements/${id}`,
            headers: {
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            },
            data: {
                title: title,
                description: description,
                publisher: publisher,
                date: date,
                price: price,
                image: image
            }
        }).then(function () {
            listAds();
            showInfo('Advertisement edited.');
        }).catch(displayError);
    }

    function displayAdvert(advert) {
        $('#viewDetailsAd').empty();
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + advert['_id'],
            headers: {
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            }
        }).then(function (advert) {
            let advertInfo = $('<div>');
            advertInfo.append(
                $('<img>').attr('src', advert['image']),
                $('<br>'),
                $('<label>').text('Price:'),
                $('<h1>').text(advert['price']),
                $('<label>').text('Title:'),
                $('<h1>').text(advert['title']),
                $('<label>').text('Description:'),
                $('<p>').text(advert['description']),
                $('<label>').text('Publisher:'),
                $('<div>').text(advert['publisher']),
                $('<label>').text('Date:'),
                $('<div>').text(advert['date']));

            $('#viewDetailsAd').append(advertInfo);
            showView('viewDetailsAd');
        }).catch(displayError)
    }

    function createAdvert() {
        let title = $('#formCreateAd input[name=title]').val();
        let description = $('#formCreateAd textarea[name=description]').val();
        let publisher = sessionStorage.getItem('username');
        let date = $('#formCreateAd input[name=datePublished]').val();
        let price = $('#formCreateAd input[name=price]').val();
        let image = $('#formCreateAd input[name=image]').val();

        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
            headers: {
                'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
            },
            data: {title, description, publisher, date, price, image}
        }).then(function () {
            showInfo('Advert created.');
            listAds();
        }).catch(displayError)
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');

    }

    function showCreateAdvertView() {
        showView('viewCreateAd');
        $('#formCreateAd').trigger('reset');
    }

    function showHideMenuLinks() {
        $('#linkHome').show();
        if (sessionStorage.getItem('authToken') === null) {
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
        } else {
            $('#loggedInUser').text(`Welcome, ${sessionStorage.getItem('username')}!`);
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
            $('#loggedInUser').text(`Welcome, ${sessionStorage.getItem('username')}!`);
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function displayError(res) {
        let errorMsg = JSON.stringify(res);
        if (res.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (res.responseJSON && res.responseJSON.description)
            errorMsg = res.responseJSON.description;
        showError(errorMsg);
    }
}