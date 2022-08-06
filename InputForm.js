//UC1 - Validate the First Name

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


function submitMsg() {
    alert("Form Submitted Successfully");
}