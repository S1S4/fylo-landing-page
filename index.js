const email = document.querySelector('.email-input');
const form = document.querySelector('.form');

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');
    error.textContent = '';
};

const checkEmail = () => {
    let valid = false;
    const em = email.value.trim();

    if (!isEmailValid(em)) {
        showError(email, 'Please check your email.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isEmailValid = checkEmail();
    let isFormValid = isEmailValid;

    if (isFormValid) {
        // submit to the server if the form is valid...
    }
});

const debounce = (fn, delay = 1500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    if (e.target.id) {
        checkEmail();
    }
}));