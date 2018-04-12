function emailValidation(email) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;
    if (pattern.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid')
    }
}

emailValidation('valid@email.bg');