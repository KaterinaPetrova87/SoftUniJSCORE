function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');

    let allIsValid = true;

    companyCheckbox.on('change', function () {
        if (companyCheckbox.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function (event) {
        event.preventDefault();
        validateForm();

        if(allIsValid){
            validationDiv.css('display', 'block');
        } else {
            validationDiv.css('display', 'none');
        }
    });

    function validateForm() {
        validateInputWithRegex(username, /^[A-Za-z\d]{3,20}$/g);
        validateInputWithRegex(email, /@.*\./g);

        if (confirmPassword.val() === password.val()) {
            validateInputWithRegex(password, /^\w{5,15}$/g);
            validateInputWithRegex(confirmPassword, /^\w{5,15}$/g);
        } else {
            confirmPassword.css('border', 'solid red');
            password.css('border', 'solid red');
            allIsValid = false;
        }

        if (companyCheckbox.is(':checked')) {
            if (companyNumber.val().match(/^[1-9]{1}[0-9]{3}$/g)) {
                companyNumber.css('border', 'none');
            } else {
                companyNumber.css('border', 'solid red');
                allIsValid = false;
            }
        }
    }

    function validateInputWithRegex(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
        }
    }
}