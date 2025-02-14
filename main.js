/** Globals **/
window.addEventListener('load', () => form.reset()); 

const inputFirstName = document.querySelector('#input-first-name');
const inputLastName = document.querySelector('#input-last-name');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const btnSubmit = document.querySelector('#btn-submit');
const form = document.querySelector('#form');

inputFirstName.addEventListener('input', validateName);
inputLastName.addEventListener('input', validateLastName);
inputEmail.addEventListener('input', validateEmail);
inputPassword.addEventListener('input', validatePassword);
form.addEventListener('submit', submitForm);

const inputValuesObj = {
    name: '',
    lastName: '',
    email: '',
    password: ''
}


/** Functions **/
function validateName(event) {  
    if(event.target.value.length > 50) {
        displayError('Name must be less than 50 characters', event.target.parentElement);
        event.target.value = '';
        inputFirstName.value = '';
        return;
    }

    inputValuesObj[event.target.name] = event.target.value.trim().toLowerCase();
}

function validateLastName(event) {
    inputValuesObj[event.target.name] = event.target.value.trim().toLowerCase();
}

function validateEmail(event) {
    inputValuesObj[event.target.name] = event.target.value.trim().toLowerCase();
}

function validatePassword(event) {
    inputValuesObj[event.target.name] = event.target.value.trim().toLowerCase();
}

function submitForm(event) {
    event.preventDefault();

    const allRequiredFilled = Object.keys(inputValuesObj).some(key => inputValuesObj[key] === '');
    if(allRequiredFilled) {
        displayError('Please fill all required fields', event.target.children[0]);
        return;
    }
}

function displayError(errorMsg, reference) {
    removeError();

    const error = document.createElement('p');
    error.classList.add('error');
    error.innerHTML = `${errorMsg} <img src="images/icon-error.svg">`;
    reference.appendChild(error);

    setTimeout(() => error.remove(), 3000);
};

function removeError() {
    const error = document.querySelector('.error');
    error ? error.remove() : null;
};