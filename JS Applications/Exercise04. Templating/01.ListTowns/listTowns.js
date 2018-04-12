function attachEvents() {
    $('#btnLoadTowns').on('click', renderTowns);
    let towns;

    function renderTowns() {
        towns = $('#towns').val();
        towns = towns.split(/\s*,\s*/).filter(e => e != '').map(e => ({town: e}));
        loadTowns(towns)
    }

    async function loadTowns(towns) {
        let source = await $.get('template.html');
        let template = Handlebars.compile(source);
        let townsList = template({towns});
        $('#root').html(townsList);
    }
}
