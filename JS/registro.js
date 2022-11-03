/* Se solicitan variables para la resposiva de la pagina */


const formularioRegistro = document.querySelector(".form-registro");
const inicioSesion = document.querySelector(".form-inicio");
const cajaFrente = document.querySelector(".caja_frente");
const cajaInicio = document.querySelector(".inputLogin");
const cajaRegistro = document.querySelector(".inputRegistro");
const fRegistro = document.getElementById("formularioRegistro");

document.getElementById("btn_Registro").addEventListener("click", registro);
document.getElementById("btn_Inicio").addEventListener("click", inicio);
window.addEventListener("resize", anchoPagina);

/* Se solicitan las variables para el registro */
const nom = document.getElementById("inputNombre");
const num = document.getElementById("inputNumero");
const ema = document.getElementById("inputEmagiil");
const contra = document.getElementById("password");
const confiContra = document.getElementById("inputContraseña"); 
const advertencia = document.getElementById("warnings");
const formRegistro = document.forms["form-registro"];
const todoRegistro = document.querySelectorAll(".form-control");


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
let usuraio = [];
fRegistro.addEventListener("submit", event => {
    event.preventDefault();
    let nombre = fRegistro.elements['inputNombre'].value;
    console.log("Se genero el submit");
    let telefono = fRegistro.elements['inputNumero'].value;
    let email = fRegistro.elements['inputEmail'].value;
    let contraseña = fRegistro.elements['password'].value;
    let confiContraseña = fRegistro.elements['inputContra'];

    let warning = "";
    let entrar = false;
    /* Con esta expresion regular se puede validar cualqueir direccion de correo que contenga caracteres Unicode */
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(nom.value.length < 6){
        warning += `El nombre no es valido <br>`;
        entrar = true;
    }
    console.log(regexEmail.test(email))
    if(!regexEmail.test(email)){
        warning += `El email no es valido <br>`;
        entrar = true;
        
    }

    if(contra.value.length < 8){
        warning += `La contraseña no deben tener menos de 8 caracteres <br>`;
        entrar = true;
    }

    if(contraseña != confiContraseña){
        warning += `La contraseña no coincide <br>`;
        entrar = true;
    }

    if(entrar){
        advertencia.innerHTML = warning;
    }
    


    
});




/* 
const filtrado = productos.filter( producto  => producto.categorias.includes({nombre: “accion”})
 */
