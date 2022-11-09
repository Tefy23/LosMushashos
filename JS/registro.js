/* Se solicitan variables para la resposiva de la pagina */
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const formularioRegistro = document.querySelector(".form-registro");
const inicioSesion = document.querySelector(".form-inicio");
const cajaFrente = document.querySelector(".caja_frente");
const cajaInicio = document.querySelector(".inputLogin");
const cajaRegistro = document.querySelector(".inputRegistro");


document.getElementById("btn_Registro").addEventListener("click", registro);
document.getElementById("btn_Inicio").addEventListener("click", inicio);
window.addEventListener("resize", anchoPagina);


/* Funcion para el ancho de la pagina  */
function anchoPagina(){
    if(window.innerWidth >850){
        cajaInicio.style.display = "block";
        cajaRegistro.style.display = "block";
    }else{
        cajaRegistro.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaInicio.style.display = "none";
        inicioSesion.style.display = "block";
        formularioRegistro.style.display = "none";
        cajaFrente.style.left = "0px";
    }
}

anchoPagina();



/* funciones para el acomodo de la pagina y cada vez que se ahaga click en boton */
function registro(){
    if(window.innerWidth > 850){
        formularioRegistro.style.display = "block";
        if(window.innerWidth < 1400){
            cajaFrente.style.left= "650px";
        }else if(window.innerWidth < 1000){
            cajaFrente.style.left= "40px";
        }else
            cajaFrente.style.left= "650px";
        inicioSesion.style.display = "none";
        cajaRegistro.style.opacity = "0";
        cajaInicio.style.opacity = "1";
    }else{
        formularioRegistro.style.display = "block";
        if(window.innerWidth < 1400){
            cajaFrente.style.left= "250px";
        }else if(window.innerWidth < 1200){
            cajaFrente.style.left= "250px";
        }else if(window.innerWidth < 1000){
            cajaFrente.style.left= "40px";
        }else
            cajaFrente.style.left= "0px";
        inicioSesion.style.display = "none";
        cajaRegistro.style.display = "none";
        cajaInicio.style.display = "block";
        cajaInicio.style.opacity = "1"
    }
}

function inicio(){
    if(window.innerWidth > 850){
        formularioRegistro.style.display = "none";
        
        if(window.innerWidth < 1400){
            cajaFrente.style.left= "150px";
        }else if(window.innerWidth < 1200){
            cajaFrente.style.left= "150px";
        }else if(window.innerWidth < 1000){
            cajaFrente.style.left= "40px";
        }else{
            cajaFrente.style.left= "213px";
        }
        inicioSesion.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaInicio.style.opacity = "0";
    }else{
        formularioRegistro.style.display = "none";
        if(window.innerWidth < 1400){
            cajaFrente.style.left= "150px";
        }else if(window.innerWidth < 1200){
            cajaFrente.style.left= "150px";
        }else if(window.innerWidth < 1000){
            cajaFrente.style.left= "40px";
        }else if(window.innerWidth < 850)
            cajaFrente.style.left= "50px";
        inicioSesion.style.display = "block";
        cajaRegistro.style.display = "block";
        cajaInicio.style.display = "none";
    }
}

/* Funciones para el registro */


//Definimos los carácteres que serán válidos en cada input par el llenado del formulario.
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[a-zA-Z\0-9]{8,15}$/, // Letras minúsculas y mayúsculas, con numero y de 8 a 15 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}


/* Mostrar icono error */
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


/*Validar que la contraseña 1 y 2 coinciden*/
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

/*------CÓDIGO DEL LOCAL STORAGE------*/
const aUsuario = [];
const aNombre = [];
const aPassword = [];
const aPassword2 = [];
const aCorreo = [];
const aTelefono = [];

let elementoBotonRegistro = document.querySelector('#btnRegistrar');

elementoBotonRegistro.addEventListener('click', registrarUsuario)

function registrarUsuario(){
    let bUsuario = document.querySelector('#usuario').value,
        bNombre = document.querySelector('#nombre').value,
        bPassword = document.querySelector('#password').value,
        bPassword2 = document.querySelector('#password2').value,
        bCorreo = document.querySelector('#correo').value,
        bTelefono = document.querySelector('#telefono').value;

    aUsuario.push(bUsuario);
    aNombre.push(bNombre);
    aPassword.push(bPassword);
    aPassword2.push(bPassword2);
    aCorreo.push(bCorreo);
    aTelefono.push(bTelefono);

    localStorage.setItem('usuario', JSON.stringify(aUsuario));
    localStorage.setItem('nombre', JSON.stringify(aNombre));
    localStorage.setItem('password', JSON.stringify(aPassword));
    localStorage.setItem('password2', JSON.stringify(aPassword2));
    localStorage.setItem('correo', JSON.stringify(aCorreo));
    localStorage.setItem('telefono', JSON.stringify(aTelefono));

}


/* 
const filtrado = productos.filter( producto  => producto.categorias.includes({nombre: “accion”})
 */


/* Inicio de sesion */

let elementoBotonInicio = document.querySelector('#botonInicio');

elementoBotonInicio.addEventListener('click', iniciarSesion)

function iniciarSesion(){
    const usuarioInicioSesion = localStorage.getItem('usuario');
    const contraInicioSesion = localStorage.getItem('password');
    let iUsuario = document.querySelector('#inputUsuario');
    let iContraseña = document.querySelector('#inicioUsuarioPassword');


    if(iUsuario.value == usuarioInicioSesion && iContraseña.value == contraInicioSesion) {
        alert('You are loged in.');
    }else {
        console.log(iUsuario.value);
        console.log(iContraseña.value);
        console.log(usuarioInicioSesion);
        console.log(contraInicioSesion);
        alert('ERROR.');
    }


    /* if(iUsuario == usuarioInicioSesion.value ){
        console.log("Lo logramos banda");
    }else console.log("F"); */
}


