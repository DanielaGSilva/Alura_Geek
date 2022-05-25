// HOME-LOGIN//

let emailIsValid = false;

document.addEventListener('DOMContentLoaded', () => {
    const emailField = document.querySelector('#email');
    const buttonLogin = document.querySelector('#login');
    const loginForm = document.querySelector('#login-form');
    emailField.addEventListener('blur', (e) => {
        validarEmail(e.target);
    })

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('hello');
        const passwordField = document.querySelector('#password');
        if (passwordField.value.length > 0 && emailIsValid) {
            window.location.href = "../html/home_login.html";
        }

    })
})
 //
function validarEmail(input) {
    const email = input.value;
    let mensagem = '';
    let padraoEsperado = /@\S+.\S+/;
    if (!padraoEsperado.test(email)) {
        mensagem = 'Digite um email no formato: endereco@provedor.com';
    } else {
        emailIsValid = true;
    }
    input.setCustomValidity(mensagem)
}
    




