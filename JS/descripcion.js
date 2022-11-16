/* ===========Variables============= */
const botonCarrito = document.querySelector('.clickCarrito')
const iconoBolsa = document.querySelector('.card-cart')
const imgPrincipal = document.getElementById('imgPrincipal');
const imgPequeña = document.getElementsByClassName('imgPequeña');
const nameItem = document.querySelector('#nameItem');
const detailItem = document.getElementById('detailItem');


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

let imagenPrincipal = document.getElementById("imgPrincipal");
imagenPrincipal.src = producto.img;

//let imagenesPequeñas = ;

let nombreProducto = document.getElementById("nameItem");
nombreProducto.innerHTML = producto.name;

let detalleProducto = document.getElementById("detailItem");
detalleProducto.innerHTML = producto.description;

let precioProducto = document.getElementById("priceItem");
precioProducto.innerHTML = producto.price;




/* ===================Funcionalidad OTRAS OFERTAS======================= */
/* function addItem(item) {
    const itemHTML = `
        <div class="col p-2">
            <a href="./descripcion.html" class="toDescription">
                <div class="card h-100">
                    <div class="p-4">
                        <img src="${item.img}" class="card-img-top img-fluid" alt="image">
                    </div>
                    <div class="card-body border-top d-flex flex-column" >
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">$450</p>
                    </div>
                </div>
            </a>
        </div>
        `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'name': 'Top Valeria',
    'img': '../assets/img/Articulos/top_valeria.jpg',
    'description': 'Top negro con mangas acampanadas'

});

addItem({
    'name': 'Falda Alicia',
    'img': '../assets/img/Articulos/falda_alicia.png',
    'description': 'Falda negra corta'
})

addItem({
    'name': 'Falda Pilar',
    'img': '../assets/img/Articulos/falda_pilar.jpg',
    'description': 'Falda negra con corte ondulado'
})

addItem({
    'name': 'Jumpsuit Water',
    'img': '../assets/img/Articulos/jumpsuit_vinipiel.jpg',
    'description': 'Vinipiel'
});

addItem({
    'name': 'Abrigo Moon',
    'img': '../assets/img/Articulos/abrigo_moon.jpg',
    'description': 'Abrigo negro'
})

addItem({
    'name': 'Jumpsuit Water',
    'img': '../assets/img/Articulos/jumpsuit_animal_print.jpg',
    'description': 'Animal Print'
}) */