//UC1 - Validate First Name

const text = document.querySelector('#text');
const texterror = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        texterror.textContent = "";
    else texterror.textContent = "Name is Incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

//UC2 - Validate Email
const email = document.querySelector('#email');
const emailerror = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^([A-Za-z]{3,}([.a-z]*)[@][a-z]{2,}[.][a-z]{2,}([.a-z]*))$');
    if (emailRegex.test(email.value)) {
        emailerror.textContent = "";
    }

    else {
        emailerror.textContent = "Email is Incorrect";
    }

});

//UC3 - Validate Mobile Number
const phone = document.querySelector('#tel');
const phoneError = document.querySelector('.phone-error');
phone.addEventListener('input', function () {
    let phoneRegex = RegExp('^[1-9]{2,}[ ][6-9]{1}[0-9]{9}$');
    if (phoneRegex.test(phone.value)) {
        phoneError.textContent = "";
    }
    else {
        phoneError.textContent = "Phone Number is Incorrect";
    }
});

//UC4 - Validate Password - Min 8characte
const password = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
password.addEventListener('input', function () {
    let pwdRegex = RegExp('^[a-zA-Z]{8,}$');
    if (pwdRegex.test(password.value)) {
        pwdError.textContent = "";
    }
    else {
        pwdError.textContent = "Password is Incorrect";
    }
});

function submitMsg() {
    alert("Form Submitted Successfully");
}
