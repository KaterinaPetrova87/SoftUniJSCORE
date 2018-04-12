$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let source = await $.get('template.hbs');
        let compiled = Handlebars.compile(source);
        let template = compiled({cats: window.cats});
        $('#allCats').append(template);
        $('button').on('click', function () {
            if ($(this).text().includes('Show')) {
                $(this).next().show();
                $(this).text('Hide status code');
            } else {
                $(this).next().hide();
                $(this).text('Show status code');
            }
        });
    }

});
