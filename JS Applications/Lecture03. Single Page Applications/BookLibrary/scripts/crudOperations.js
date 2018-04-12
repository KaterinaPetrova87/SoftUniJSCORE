const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_H19zlzF5M';
const APP_SECRET = '91193d4cb02e42888e2e7886bfd11fa0';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

function loginUser() {
    let username = $('#formLogin input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();

    $.ajax({
        url: `${BASE_URL}user/${APP_KEY}/login`,
        method: 'POST',
        headers: AUTH_HEADERS,
        data: {
            username: username,
            password: password
        }
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError);
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();

    $.ajax({
        url: `${BASE_URL}user/${APP_KEY}/`,
        method: 'POST',
        headers: AUTH_HEADERS,
        data: {
            username: username,
            password: password
        }
    }).then(function (res) {
        signInUser(res, 'Registration successful.')
    }).catch(handleAjaxError);
}

function listBooks() {
    $.ajax({
        url: `${BASE_URL}appdata/${APP_KEY}/books`,
        method: 'GET',
        headers: {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }).then(function (res) {
        showView('viewBooks');
        displayPaginationAndBooks(res.reverse());
    }).catch(handleAjaxError);
}


function createBook() {
    let title = $('#formCreateBook input[name=title]').val();
    let author = $('#formCreateBook input[name=author]').val();
    let description= $('#formCreateBook textarea[name=description]').val();
    $.ajax({
        url: `${BASE_URL}appdata/${APP_KEY}/books`,
        method: 'POST',
        headers: {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        },
        data: {
            title: title,
            author: author,
            description: description
        }
    }).then(function () {
        listBooks();
        showInfo('Book created.');
    }).catch(handleAjaxError);
}

function deleteBook(book) {
    $.ajax({
        method: 'DELETE',
        url: `${BASE_URL}appdata/${APP_KEY}/books/${book['_id']}`,
        headers: {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        }
    }).then(function () {
        listBooks();
        showInfo('Book deleted.');
    }).catch(handleAjaxError);
}

function loadBookForEdit(book) {
    showView('viewEditBook');
    $('#formEditBook input[name=id]').val(book['_id']);
    $('#formEditBook input[name=title]').val(book['title']);
    $('#formEditBook input[name=author]').val(book['author']);
    $('#formEditBook textarea[name=description]').val(book['description']);
}

function editBook() {
    let id = $('#formEditBook input[name=id]').val();
    let title = $('#formEditBook input[name=title]').val();
    let author = $('#formEditBook input[name=author]').val();
    let description = $('#formEditBook textarea[name=description]').val();

    $.ajax({
        method: 'PUT',
        url: `${BASE_URL}appdata/${APP_KEY}/books/${id}`,
        headers: {
            'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')
        },
        data: {
            title: title,
            author: author,
            description: description
        }
    }).then(function () {
        listBooks();
        showInfo('Book edited.');
    }).catch(handleAjaxError);

}

function logoutUser() {
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    showInfo('Logout successful.');
    $('#loggedInUser').text('');
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res['username']);
    sessionStorage.setItem('authToken', res['_kmd']['authtoken']);
    sessionStorage.setItem('userId', res['_id']);
    showHomeView();
    showHideMenuLinks();
    showInfo(message);
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo');
    if (pagination.data("twbs-pagination")) {
        pagination.twbsPagination('destroy');
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            let table = $('#books > table');
            table.find('tr').each((index, el) => {
                if(index > 0){
                    $(el).remove();
                }
            });
            let startBook = (page - 1) * BOOKS_PER_PAGE;
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length);
            $(`a:contains(${page})`).addClass('active');
            for (let i = startBook; i < endBook; i++) {
                let tr = $('<tr>');
                table.append($(tr)
                    .append($(`<td>${books[i].title}</td>`))
                    .append($(`<td>${books[i].author}</td>`))
                    .append($(`<td>${books[i].description}</td>`))
                );
                if(books[i]['_acl']['creator'] === sessionStorage.getItem('userId')){
                    $(tr).append($('<td>')
                        .append($('<a href="#">[Edit]</a>').on('click', function () {
                            loadBookForEdit(books[i]);
                        }))
                        .append($('<a href="#">[Delete]</a>').on('click', function () {
                            deleteBook(books[i]);
                        }))
                    )
                }
            }
        }
    });
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0) {
        errorMsg = "Cannot connect due to network error.";
    }
    if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
    }
    showError(errorMsg);
}