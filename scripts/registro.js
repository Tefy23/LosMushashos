/* Se solicitan variables para la resposiva de la pagina */

let formularioRegistro = document.querySelector(".form-registro");
let inicioSesion = document.querySelector(".form-inicio");
let cajaFrente = document.querySelector(".caja_frente");
let cajaInicio = document.querySelector(".inputLogin");
let cajaRegistro = document.querySelector(".inputRegistro");
document.getElementById("btn_Registro").addEventListener("click", registro);
document.getElementById("btn_Inicio").addEventListener("click", inicio);
window.addEventListener("resize", anchoPagina);

/* Se solicitan las variables para el registro */
/* const nombre = document.getElementById("inputNombre");
const numero = document.getElementById("inputNumero");
const email = document.getElementById("inputEmail");
const contraseña = document.getElementById("password");
const confiContraseña = document.getElementById("inputContraseña"); */
const formRegistro = document.forms("form-registro");


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
        cajaFrente.style.left= "650px";
        inicioSesion.style.display = "none";
        cajaRegistro.style.opacity = "0";
        cajaInicio.style.opacity = "1";
    }else{
        formularioRegistro.style.display = "block";
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
        cajaFrente.style.left= "213px";
        inicioSesion.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaInicio.style.opacity = "0";
    }else{
        formularioRegistro.style.display = "none";
        cajaFrente.style.left= "0px";
        inicioSesion.style.display = "block";
        cajaRegistro.style.display = "block";
        cajaInicio.style.display = "none";
    }
}

/* Funciones para el registro */
formRegistro.addEventListener("Submit", evento => {
    formRegistro.preventdefault();
    let nombre = formRegistro.elements['inputNombre'].value;
    let telefono = formRegistro.elements['inputNumero'].value;
    let email = formRegistro.elements['inputEmail'].value;
    let contraseña = formRegistro.elements['password'].value;
    let confiContraseña = formRegistro.elements['inputContra'];
});

