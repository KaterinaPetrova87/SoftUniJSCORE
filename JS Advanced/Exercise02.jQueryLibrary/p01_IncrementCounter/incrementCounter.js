function increment(selector) {
    $(selector).append($('<textarea>').addClass('counter').val('0').attr('disabled', true))
        .append($('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment'))
        .append($('<button>').addClass('btn').attr('id', 'addBtn').text('Add'))
        .append($('<ul>').addClass('results'))
        .appendTo($(selector));

    $('#incrementBtn').on('click', increaseValue);
    function increaseValue() {
        $('textarea.counter').val(Number($('textarea.counter').val()) + 1);
    }

    $('#addBtn').on('click', addListItem);
    function addListItem() {
        $('ul.results').append($(`<li>${$('textarea.counter').val()}</li>`));
    }
}
