/* *********Funcionamiento del botón: Bolsa de compra********* */
const botonCarrito = document.querySelector('.clickCarrito')
const iconoBolsa = document.querySelector('.card-cart')

botonCarrito.addEventListener('click', clickABolsa);

function clickABolsa(){
    iconoBolsa.classList.toggle('inactive');
    console.log("Hiciste un click") // Hay que quitar esta sentencia
}
console.log("hola"); //Hay que quitar esta también


/* ************Creación dinámica de la ficha de producto************* */
function addDescription(itemInfo){
    const descriptionItem = `
    <div class="col-sm-12 col-md-7 col-lg-8 border-end contendorImg">
    <div class="d-none d-lg-block text-center">
        <img src="${itemInfo.img}" alt="${itemInfo.name}" class="imgProduct">
    </div>

    <div class="d-lg-none mt-2 text-center">
        <img src="${itemInfo.imgAlterna}" alt="${itemInfo.name}" class="dinamicImgProduct">
    </div>
</div>

<!-- Ficha del producto -->
<div class="col-sm-12 col-md-5 col-lg-4 border-end">
    <!-- Nombre del Item -->
    <div class="row text-center">
        <h2>${itemInfo.name}</h2>
        <hr>
    </div>

    <!--Precio -->
    <div class="row" id="price">
        <p>${itemInfo.price}</p>
    </div>

    <div class="row justify-content-center">
        <hr>
        <div class="col-md-2"></div>
        <div class="col-sm-12 col-md-8 text-center my-5 ">
            <h6><b>Calificaciones del producto</b></h6>
            <!-- ranking stars -->
            <img src="./../assets/ico/estrella.png" alt="estrella()" class="star">
            <img src="./../assets/ico/estrella.png" alt="estrella()" class="star">
            <img src="./../assets/ico/estrella.png" alt="estrella()" class="star">
            <img src="./../assets/ico/estrella.png" alt="estrella()" class="star">
            <img src="./../assets/ico/estrella.png" alt="estrella()" class="star">

            <!-- link de reviews -->
            <a href="#" class="ranking ms-1 ms-3">reviews</a>
        </div>
        <div class="col-md-2"></div>
        <hr>

    </div>
    <!-- Descripción del producto -->
    <div class="row">
        <div class="col-2"></div>
        <div class="col-md-8 text-start">
            <h6><b>Descripción</b></h6>
            <p>${itemInfo.description}</p>
        </div>
        <div class="col-md-2"></div>
    </div>
    `
}



/* Lista de descripción de productos */
addDescription({
    'name':"Top Valeria",
    'img': "./../assets/img/itemDescription/card_topValeria.png",
    'imgAlterna': "./..//assets/img/Articulos/top_valeria.jpg",
    'price': "$ 450 mxn",
    'description': "Top negro con mangas acampanadas"
});

addDescription({
    'name':"Falda Alicia",
    'img':"./../assets/img/itemDescription/card_faldaAlicia.png",
    'imgAlterna':"./../assets/img/Articulos/falda_alicia.png",
    'price':"$ 445 mxn",
    'description':"Falda negra corta"
});

addDescription({
    'name':"Falda Pilar",
    'img':"./../assets/img/itemDescription/card_faldaPilar.png",
    'imgAlterna':"./../assets/img/Articulos/falda_pilar.jpg",
    'price':"$ 450 mxn",
    'description':"Falda negra con corte ondulado"
});

addDescription({
    'name':"",
    'img':"",
    'imgAlterna':"",
    'price':"",
    'description':""
});
