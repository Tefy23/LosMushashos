function addItem(item) {
    for (let i = 0; i < productosjson.length; i++) {
        const itemHTML = `
            <div class="col p-2">
                <a href="./descripcion.html" class="toDescription" value = "${item[i]}">
                    <div class="card h-100"  id= "${item[i].id_producto}">
                        <div class="p-4">
                            <img src="${item[i].img}" class="card-img-top img-fluid" alt="image">
                        </div>
                        <div class="card-body border-top d-flex flex-column" >
                            <h5 class="card-title">${item[i].name}</h5>
                            <p class="card-text">${item[i].description}</p>
                            <p class="card-text">$450</p>
                        </div>
                    </div>
                </a>
            </div>
            `;
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;
    }
}

let productosjson = [
    {
        'id_producto': 1,
        'name': 'Top Valeria',
        'img': '../assets/img/Articulos/top_valeria.jpg',
        'description': 'Top negro con mangas acampanadas'

    },
    {
        'id_producto': 2,
        'name': 'Falda Alicia',
        'img': '../assets/img/Articulos/falda_alicia.png',
        'description': 'Falda negra corta'
    },
    {
        'id_producto': 3,
        'name': 'Falda Pilar',
        'img': '../assets/img/Articulos/falda_pilar.jpg',
        'description': 'Falda negra con corte ondulado'
    },
    {
        'id_producto': 4,
        'name': 'Jumpsuit Water',
        'img': '../assets/img/Articulos/jumpsuit_vinipiel.jpg',
        'description': 'Vinipiel'
    },
    {
        'id_producto': 5,
        'name': 'Abrigo Moon',
        'img': '../assets/img/Articulos/abrigo_moon.jpg',
        'description': 'Abrigo negro'
    },
    {
        'id_producto': 6,
        'name': 'Jumpsuit Water',
        'img': '../assets/img/Articulos/jumpsuit_animal_print.jpg',
        'description': 'Animal Print'
    },
    {
        'id_producto': 7,
        'name': 'Jumpsuit ',
        'img': '../assets/img/Articulos/jumpsuit_water.jpg',
        'description': 'Edicion limitada'
    },
    {
        'id_producto': 8,
        'name': 'Sudadera',
        'img': '../assets/img/Articulos/sudadera_autum.png',
        'description': 'Autum'
    },
    {
        'id_producto': 9,
        'name': 'Sudadera',
        'img': '../assets/img/Articulos/sudadera_winter.png',
        'description': 'Winter'
    },
    {
        'id_producto': 10,
        'name': 'Sueter',
        'img': '../assets/img/Articulos/sueter.jpg',
        'description': 'Sueter Gris'
    }
];

addItem(productosjson);