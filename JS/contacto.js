/* Validaciones */

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	mensaje: /^[a-z0-9_-]{20,500}$/,
};


const formularioContacto = document.querySelector('form');

const inputsContacto = document.querySelectorAll('input', 'textarea');
const textareaContacto = document.querySelector('textarea');

const nombreError = document.querySelector('#errorNombre');
const emailError = document.querySelector('#errorEmail');
const mensajeError = document.querySelector('#errorMensaje');

const statusInf = {
	nombre: false,
	email: false,
	mensaje: false,
};

inputsContacto.forEach((inp) => {
	inp.addEventListener('keyup', (e) => {

		switch (e.target.name) {
			case 'nombre':
				if (expresiones.nombre.test(e.target.value)) {
					statusInf.nombre = true;
					nombreError.textContent = '';
				} else {
					(statusInf.nombre = false), (nombreError.textContent = 'Nombre incorrecto');
				}
				break;
			case 'email':
				if (expresiones.email.test(e.target.value)) {
					statusInf.email = true;
					emailError.textContent = '';
				} else {
					statusInf.email = false;
					emailError.textContent = 'E-mail incorrecto';
				}
				break;
			case 'mensaje':
				if (expresiones.mensaje.test(e.target.value)) {
					statusInf.mensaje = true;
					mensajeError.textContent = '';
				} else {
					(statusInf.mensaje = false), (mensajeError.textContent = 'Por favor escribe tu mensaje');
				}
				break;
		}
	});
});

textareaContacto.addEventListener('input', (e) => {
	if (e.target.value != '') {
		statusInf.mensaje = true;
		mensajeError.textContent = '';
	} else {
		(statusInf.mensaje = false), (mensajeError.textContent = 'Por favor escribe tu mensaje');
	}
});
/*  */

/*  */