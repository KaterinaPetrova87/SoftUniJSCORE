function initializeTable() {
    let btn = $('#createLink').on('click', addCountry);
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();

    function addCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createCountry(country, capital);
        fixLinks();
    }

    function createCountry(country, capital) {
        $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').on('click', moveUp))
                .append($('<a href="#">[Down]</a>').on('click', moveDown))
                .append($('<a href="#">[Delete]</a>').on('click', deleteRow)))
            .appendTo($('#countriesTable'));

        $('#newCountryText').val('');
        $('#newCapitalText').val('');
    }
    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
    }
    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixLinks();
    }
    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.remove();
        fixLinks();
    }
    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }
}