const formulario = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordVerificacion = document.getElementById('password-verificacion');

let bandError = false;
let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function showError(input, mensaje) {
    let contenedorForm = input.parentElement;
    input.className ='form__input error';
    let mensajeError =  contenedorForm.querySelector ('small');
    mensajeError.innerText = mensaje;
}

function showSuccess(input) {
    console.log('exito!');
    input.className ='form__input success';
}

function quitarError (input) {
    input.classList.remove('error');
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if (usuario.value === ''){
        showError(usuario, 'Se requiere el nombre del usuario');
        bandError = true;
    } else {
        showSuccess(usuario);
    }
    if (email.value === ''){
        showError(email, 'Se requiere el email');
        bandError = true;
    } else if (email.value.match(validacionEmail)){
        showSuccess(email);
    } else {
        showError(email, 'El formato ingresado es incorrecto');
    }
    if (password.value === ''){
        showError(password, 'Escriba una contraseña');
        bandError = true;
    } else {
        showSuccess(password);
    }
    if (passwordVerificacion.value === ''){
        showError(passwordVerificacion, 'Ingrese nuevamente la contraseña');
        bandError = true;
    } else if (password.value === passwordVerificacion.value){
        showSuccess(passwordVerificacion);
    } else {
        showError(password, 'Las contraseñas no coinciden');
        showError(passwordVerificacion, 'Las contraseñas no coinciden');
    }

    if(!bandError) {
        Swal.fire({
            title: 'Felicitaciones',
            text: 'Su registro ha sido confirmado',
            icon: 'success',
            confirmButtonText: 'Finalizar'
          })
    }
})

usuario.addEventListener('keydown', function(e){
    if(bandError) {
        quitarError(usuario);
    }
});
email.addEventListener('keydown', function(e){
    if(bandError) {
        quitarError(email);
    }
});
password.addEventListener('keydown', function(e){
    if(bandError) {
        quitarError(password);
    }
});
passwordVerificacion.addEventListener('keydown', function(e){
    if(bandError) {
        quitarError(passwordVerificacion);
    }
});