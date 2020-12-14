window.addEventListener('load', () => {

    let errores = {};
    let erroresLog = {};

    let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.getElementById('inputPassword');
    let inputEmail2 = document.getElementById('inputEmail2');
    let inputPassword2 = document.getElementById('inputPassword2');
    let inputNombre = document.getElementById('inputNombre');
    let inputApellido = document.getElementById('inputApellido');

    let regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    let inputEmailValidator = () => {
        switch (true) {
            case inputEmail.value.length == 0:
                erroresLog.email = 'El campo email es obligatorio';
                errorEmail.innerHTML = erroresLog.email;
                inputEmail.classList.add('is-invalid');
                break;
            case !regExEmail.test(inputEmail.value):
                erroresLog.email = 'Debes escribir un email válido';
                errorEmail.innerHTML = erroresLog.email;
                inputEmail.classList.add('is-invalid');
                break;
            default:
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
                errorEmail.innerHTML = ''
        }
    }
    
    inputEmail.addEventListener('blur', () => {
        inputEmailValidator();
    })
    inputEmail.addEventListener('keyup', () => {
        inputEmailValidator();
    })

    let inputPassValidator = () => {
        switch (true) {
            case inputPassword.value.length == 0:
                erroresLog.pass = 'El campo contraseña es obligatorio';
                errorPassword.innerHTML = erroresLog.pass;
                inputPassword.classList.add('is-invalid');
                break;
            default:
                inputPassword.classList.remove('is-invalid');
                inputPassword.classList.add('is-valid');
                errorPassword.innerHTML = ''
        }
    }
    
    inputPassword.addEventListener('blur', () => {
        inputPassValidator();
    })
    inputPassword.addEventListener('keyup', () => {
        inputPassValidator();
    })

    let inputEmail2Validator = () => {
        switch (true) {
            case inputEmail2.value.length == 0:
                erroresLog.email = 'El campo email es obligatorio';
                errorEmail2.innerHTML = erroresLog.email;
                inputEmail2.classList.add('is-invalid');
                break;
            case !regExEmail.test(inputEmail2.value):
                erroresLog.email = 'Debes escribir un email válido';
                errorEmail2.innerHTML = erroresLog.email;
                inputEmail2.classList.add('is-invalid');
                break;
            default:
                inputEmail2.classList.remove('is-invalid');
                inputEmail2.classList.add('is-valid');
                errorEmail2.innerHTML = ''
        }
    }

    inputEmail2.addEventListener('blur', () => {
        inputEmail2Validator();
    })
    inputEmail2.addEventListener('keyup', () => {
        inputEmail2Validator();
    })

    let passRegistroValidation = () => {
        switch (true) {
            case inputPassword2.value.length == 0:
                errores.pass = 'El campo Pass es obligatorio';
                errorPassword2.innerHTML = errores.pass;
                inputPassword2.classList.add('is-invalid');
                break;
            case !regExPass.test(inputPassword2.value):
                errores.pass = 'La contraseña debe tener: al menos 6 caracteres, una mayúscula, una minúscula y un número';
                errorPassword2.innerHTML = errores.pass;
                inputPassword2.classList.add('is-invalid');
                break;
            default:
                inputPassword2.classList.remove('is-invalid');
                inputPassword2.classList.add('is-valid');
                errorPassword2.innerHTML = ''
        }
    }
    
    inputPassword2.addEventListener('blur', () => {
        passRegistroValidation();
    })
    inputPassword2.addEventListener('keyup', () => {
        passRegistroValidation()
    })
    

    let nombreValidator = () => {
        switch (true) {
            case inputNombre.value.length == 0:
                errores.nombre = 'Debes ingresar un nombre';
                errorNombre.innerHTML = errores.nombre;
                inputNombre.classList.add('is-invalid');
                break;
            case inputNombre.value.length <= 2:
                errores.nombre = 'El campo nombre debe tener al menos tres letras';
                errorNombre.innerHTML = errores.nombre;
                inputNombre.classList.add('is-invalid');
                break;
            default:
                inputNombre.classList.remove('is-invalid');
                inputNombre.classList.add('is-valid');
                errorNombre.innerHTML = ''
        }
    }
    
    inputNombre.addEventListener('blur', () => {
        nombreValidator();
    })
    inputNombre.addEventListener('keyup', () => {
        nombreValidator();
    })

    let apellidoValidator = () => {
        switch (true) {
            case inputApellido.value.length == 0:
                errores.apellido = 'Debes ingresar un apellido';
                errorApellido.innerHTML = errores.apellido;
                inputApellido.classList.add('is-invalid');
                break;
            case inputApellido.value.length <= 2:
                errores.apellido = 'El campo apellido debe tener al menos tres letras';
                errorApellido.innerHTML = errores.apellido;
                inputApellido.classList.add('is-invalid');
                break;
            default:
                inputApellido.classList.remove('is-invalid');
                inputApellido.classList.add('is-valid');
                errorApellido.innerHTML = ''
        }
    }
    
    inputApellido.addEventListener('blur', () => {
        apellidoValidator();
    })
    inputApellido.addEventListener('keyup', () => {
        apellidoValidator()
    })
    

    

})