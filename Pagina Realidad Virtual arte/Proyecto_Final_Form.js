// Proyecto_Final_Form.js

// Función para generar un valor de CAPTCHA aleatorio
function generarCaptcha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    const longitudCaptcha = 5; // Longitud del CAPTCHA (puedes ajustarla según tus preferencias)

    for (let i = 0; i < longitudCaptcha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        captcha += caracteres.charAt(indiceAleatorio);
    }

    return captcha;
}

// Función para mostrar el CAPTCHA generado en el elemento con ID "texto-captcha"
function mostrarCaptcha() {
    const textoCaptcha = generarCaptcha();
    document.getElementById('texto-captcha').textContent = textoCaptcha;
}

// Llamar a la función para mostrar el CAPTCHA generado
mostrarCaptcha();

// Función para validar el CAPTCHA
function validarCaptcha() {
    const inputCaptcha = document.getElementById('inputCaptcha').value;
    const captchaGenerado = document.getElementById('texto-captcha').textContent;

    if (inputCaptcha !== captchaGenerado) {
        alert('Captcha incorrecto. Por favor, inténtalo de nuevo.');
        return false; // Evita que se envíe el formulario si el CAPTCHA es incorrecto
    }

    // Continúa con el envío del formulario si el CAPTCHA es correcto
    return true;
}

// Borrar lo que se escribió en el formulario
function cancelarLogin() {
    // Limpiar los campos de entrada al hacer clic en Cancelar
    document.getElementById('nombreUsuario').value = '';
    document.getElementById('carnet').value = '';
    document.getElementById('inputCaptcha').value = '';
}
