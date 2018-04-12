$(() => {
    const app = Sammy('#main', function () {
        let appCtx = this;
        appCtx.use('Handlebars', 'hbs');

        appCtx.get('#/index.html', (ctx) => {
            ctx.isAuth = auth.isAuth();
            
            $.get('data.json')
                .then(function (contacts) {
                    ctx.contacts = contacts;
                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        footer: 'templates/common/footer.hbs',
                        contact: 'templates/contacts/contact.hbs',
                        contactDetails: 'templates/contacts/contactDetails.hbs',
                        contactsList: 'templates/contacts/contactsList.hbs',
                        contactsPage: 'templates/contacts/contactsPage.hbs',
                        loginForm: 'templates/forms/loginForm.hbs',
                        navigation: 'templates/common/navigation.hbs'
                    }).then(function () {
                        ctx.partials = this.partials;
                        render();
                    });
                });
            
            function render() {
                ctx.partial('templates/welcome.hbs')
                    .then(attachEvents)
            }
            
            function attachEvents() {
                $('.contact').on('click', (event) => {
                    let id = $(event.target).closest('.contact').attr('data-id');

                    ctx.selected = ctx.contacts[id];
                    render();
                });
            }
        });

        appCtx.get('#/register', (ctx) => {
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                navigation: 'templates/common/navigation.hbs'
            }).then(function () {
                this.partial('templates/forms/registerForm.hbs');
            });
        });

        appCtx.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;
            if(repeatPassword === password){
                auth.register(username,password)
                    .then(function (userData) {
                        auth.saveSession(userData)
                        ctx.redirect('#/index.html');
                    }).catch(console.error);
            } else {
                alert('Wrong password')
            }
        });

        appCtx.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            auth.login(username, password)
                .then(function (userData) {
                    auth.saveSession(userData);
                    ctx.redirect('#/index.html');
                }).catch(console.error);
        });
    });

    app.run();
});