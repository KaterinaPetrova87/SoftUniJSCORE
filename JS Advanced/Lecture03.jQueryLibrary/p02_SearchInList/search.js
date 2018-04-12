function search() {
    let towns = $('#towns').find('li');
    let searchedText = $('#searchText').val();
    let matches = 0;

    towns.each(function (index, element) {
        if (element.textContent.includes(searchedText)) {
            $(element).css('font-weight', 'bold');
            matches++;
        } else {
            $(element).css('font-weight', '');
        }
    });
    $('#result').text(`${matches} matches found.`)
}