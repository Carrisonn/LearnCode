/** Globals **/
window.addEventListener('load', () => form.reset()); 

const inputFirstName = document.querySelector('#input-first-name');
const inputLastName = document.querySelector('#input-last-name');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const btnSubmit = document.querySelector('#btn-submit');
const form = document.querySelector('#form');

inputFirstName.addEventListener('blur', validateFirstName);
inputLastName.addEventListener('blur', validateLastName);
inputEmail.addEventListener('blur', validateEmail);
inputPassword.addEventListener('blur', validatePassword);
form.addEventListener('submit', submitForm);

const infoFormObj = {
    name: '',
    lastName: '',
    email: '',
    password: ''
}


/** Functions **/
function validateFirstName(event) { 
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?: [A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/;
    if(!regex.test(event.target.value)) {
        displayError('Please enter a valid name', event.target.parentElement);
        inputFirstName.value = '';
        return;
    } 
    
    infoFormObj.name = event.target.value.trim().toLowerCase();
}

function validateLastName(event) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?: [A-Za-zÁÉÍÓÚáéíóúñÑ]+)*$/;
    if(!regex.test(event.target.value)) {
        displayError('Please enter a valid surname', event.target.parentElement);
        inputLastName.value = '';
        return;
    }

    infoFormObj.lastName= event.target.value.trim().toLowerCase();
}

function validateEmail(event) {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(event.target.value)) {
        displayError('Please enter a valid email', event.target.parentElement);
        inputEmail.value = '';
        return;
    }

    infoFormObj.email = event.target.value.trim().toLowerCase();
};

function validatePassword(event) {
    if(event.target.value.length < 8) {
        displayError('Password must be at least 8 characters', event.target.parentElement);
        inputPassword.value = '';
        return;
    }

    infoFormObj.password = event.target.value.trim().toLowerCase();
};

function submitForm(event) {
    event.preventDefault();

    const existEmptyField = Object.keys(infoFormObj).some(key => infoFormObj[key] === '');
    if(existEmptyField) {
        displayError('Please fill all the fields', event.target.firstElementChild);
        return;
    }

    Swal.fire({
        title: "Success!",
        text: "You claimed your free trial!",
        icon: "success",
        confirmButtonText: "Nice!",
        background: '#fffff',
        color: '#000000',
        iconColor: '#02a502',
        allowOutsideClick: false
    });
    
    Object.keys(infoFormObj).forEach(key => infoFormObj[key] = ''); 
    form.reset();
};

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