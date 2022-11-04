const botonCarrito = document.querySelector('.clickCarrito')
const iconoBolsa = document.querySelector('.card-cart')

botonCarrito.addEventListener('click', clickABolsa);

function clickABolsa(){
    iconoBolsa.classList.toggle('inactive');
    console.log("Hiciste un click")
}
console.log("hola");