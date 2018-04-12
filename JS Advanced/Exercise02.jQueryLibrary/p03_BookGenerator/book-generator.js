function createBook(selector, title, author, isbn) {
    isbn = Number(isbn);
    let id = 1;
    $(selector)
        .append($('<div>').attr('id', 'book' + id)
        .append($(`<p>${title}</p>`).addClass('title'))
        .append($(`<p>${author}</p>`).addClass('author'))
        .append($(`<p>${isbn}</p>`).addClass('isbn'))
        .append($('<button>Select</button>').on('click', select))
        .append($('<button>Deselect</button>').on('click', deselect)));

    function select() {
        $(this).parent().css('border', '2px solid blue');
    }

    function deselect() {
        $(this).parent().css('border', '');
    }
    id++;
}