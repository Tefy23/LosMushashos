/* ===========Variables============= */
const botonCarrito = document.querySelector('.clickCarrito')
const iconoBolsa = document.querySelector('.card-cart')
const imgPrincipal = document.getElementById('imgPrincipal');
const imgPequeña = document.getElementsByClassName('imgPequeña');
const nameItem = document.querySelector('#nameItem');
const detailItem = document.getElementById('detailItem');

/*===================================CODIGO AÑADIDO================================================*/
/* =================== BOTON DE COMPRA============= */
const botonAdd = document.getElementById("btnAdd")
/*=================================================================================================*/

/* *********Funcionamiento del botón: Bolsa de compra********* */
botonCarrito.addEventListener('click', clickABolsa);

function clickABolsa() {
    iconoBolsa.classList.toggle('inactive');
    console.log("Hiciste un click") // Hay que quitar esta sentencia
}

/* =================== Funcionalidad Fotografía del producto ============= */
imgPequeña[0].addEventListener('click', function () {
    imgPrincipal.src = imgPequeña[0].src;
});
imgPequeña[1].addEventListener('click', function () {
    imgPrincipal.src = imgPequeña[1].src;
});
imgPequeña[2].addEventListener('click', function () {
    imgPrincipal.src = imgPequeña[2].src;
});
imgPequeña[3].addEventListener('click', function () {
    imgPrincipal.src = imgPequeña[3].src;
});

/* =================== Productos Dinámicos ============= */
let producto = JSON.parse(localStorage.getItem("product"));
console.log(producto);

let titulo = document.querySelector("title");
titulo.innerHTML = producto.nombrePrenda;

let imagenPrincipal = document.getElementById("imgPrincipal");
imagenPrincipal.src = producto.imgPrincipal;

//let imagenesPequeñas = ;

let nombreProducto = document.getElementById("nameItem");
nombreProducto.innerHTML = producto.nombrePrenda;

let detalleProducto = document.getElementById("detailItem");
detalleProducto.innerHTML = producto.detalle;

let precioProducto = document.getElementById("priceItem");
precioProducto.innerHTML = (`$ ${producto.precio}  ${producto.divisa}`);


/*===================AÑADIR A CARRITO=======================*/

botonAdd.addEventListener("click", function (e) {
    e.preventDefault();
    let listaCompra = [];
    if (localStorage.getItem("carrito")) {
        listaCompra = JSON.parse(localStorage.getItem("carrito"));
    }
    let compra = JSON.parse(localStorage.getItem("product"));
    listaCompra.push(compra);
    localStorage.setItem("carrito", JSON.stringify(listaCompra));
})

/* ===================Funcionalidad OTRAS OFERTAS======================= */
function verMas(item) {
    let counter = 0;
    while (counter < 6) {
        const itemHTML = `
            <div class="col p-2">
            <a href="./descripcion.html">    
            <button class="toDescription h-100" id= "${item[counter].productoId}">
                    <div class="card h-100"}">
                        <div class="p-4">
                            <img src="${item[counter].imgPrincipal}" class="card-img-top img-fluid" alt="image">
                        </div>
                        <div class="card-body border-top d-flex flex-column" >
                            <h5 class="card-title">${item[counter].nombrePrenda}</h5>
                            <p class="card-text flex-grow-1">${item[counter].detalle}</p>
                            <p class="card-text">$${item[i].precio} ${item[counter].divisa}</p>
                        </div>
                    </div>
                </button>
            </a>
            </div>
            `;
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;

        counter++;

    }
};
