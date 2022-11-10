/* *********Funcionamiento del botón: Bolsa de compra********* */
const botonCarrito = document.querySelector('.clickCarrito')
const iconoBolsa = document.querySelector('.card-cart')

botonCarrito.addEventListener('click', clickABolsa);

function clickABolsa(){
    iconoBolsa.classList.toggle('inactive');
    console.log("Hiciste un click") // Hay que quitar esta sentencia
}
console.log("hola"); //Hay que quitar esta también

/* =================== Funcionalidad Fotografía del producto ============= */
let imgPrincipal = document.getElementById('imgPrincipal');
let imgPequeña = document.getElementsByClassName('imgPequeña');

imgPequeña[0].addEventListener('click', function(){
    imgPrincipal.src = imgPequeña[0].src;
});
imgPequeña[1].addEventListener('click', function(){
    imgPrincipal.src = imgPequeña[1].src;
});
imgPequeña[2].addEventListener('click', function(){
    imgPrincipal.src = imgPequeña[2].src;
});
imgPequeña[3].addEventListener('click', function(){
    imgPrincipal.src = imgPequeña[3].src;
});




/* ===================Funcionalidad OTRAS OFERTAS======================= */
function addItem(item) {
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
})

/*addItem({
    'name': 'Jumpsuit ',
    'img': '../assets/img/Articulos/jumpsuit_water.jpg',
    'description': 'Edicion limitada'
})

addItem({
    'name': 'Sudadera',
    'img': '../assets/img/Articulos/sudadera_autum.png',
    'description': 'Autum'
});

addItem({
    'name': 'Sudadera',
    'img': '../assets/img/Articulos/sudadera_winter.png',
    'description': 'Winter'
})

addItem({
    'name': 'Sueter',
    'img': '../assets/img/Articulos/sueter.jpg',
    'description': 'Sueter Gris'
})
 */