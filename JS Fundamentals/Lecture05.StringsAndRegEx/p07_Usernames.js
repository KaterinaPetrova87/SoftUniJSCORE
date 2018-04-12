function usernames(array) {
    let result = [];

    for (let mail of array) {
        let name = mail.substring(0, mail.indexOf('@')) + '.';
        let domain = mail.substring(mail.indexOf('@')+1).split('.').forEach(e => name += e[0]);
        result.push(name);
    }
    console.log(result.join(', '))
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);