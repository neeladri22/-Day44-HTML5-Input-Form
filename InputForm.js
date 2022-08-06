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

function submitMsg() {
    alert("Form Submitted Successfully");
}