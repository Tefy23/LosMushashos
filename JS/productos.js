function addItem(item) {
    const itemHTML = `
        <div class="col p-2">
            <a href="./descripcion.html" class="toDescription">
                <div class="card h-100" id = "${item.id_producto}">
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
    'id_producto': 1,
    'name': 'Top Valeria',
    'img': '../assets/img/Articulos/top_valeria.jpg',
    'description': 'Top negro con mangas acampanadas'
    
});

addItem({
    'id_producto': 2,
    'name': 'Falda Alicia',
    'img': '../assets/img/Articulos/falda_alicia.png',
    'description': 'Falda negra corta'
})

addItem({
    'id_producto': 3,
    'name': 'Falda Pilar',
    'img': '../assets/img/Articulos/falda_pilar.jpg',
    'description': 'Falda negra con corte ondulado'
})

addItem({
    'id_producto': 4,
    'name': 'Jumpsuit Water',
    'img': '../assets/img/Articulos/jumpsuit_vinipiel.jpg',
    'description': 'Vinipiel'
});

addItem({
    'id_producto': 5,
    'name': 'Abrigo Moon',
    'img': '../assets/img/Articulos/abrigo_moon.jpg',
    'description': 'Abrigo negro'
})

addItem({
    'id_producto': 6,
    'name': 'Jumpsuit Water',
    'img': '../assets/img/Articulos/jumpsuit_animal_print.jpg',
    'description': 'Animal Print'
})

addItem({
    'id_producto': 7,
    'name': 'Jumpsuit ',
    'img': '../assets/img/Articulos/jumpsuit_water.jpg',
    'description': 'Edicion limitada'
})

addItem({
    'id_producto': 8,
    'name': 'Sudadera',
    'img': '../assets/img/Articulos/sudadera_autum.png',
    'description': 'Autum'
});

addItem({
    'id_producto': 9,
    'name': 'Sudadera',
    'img': '../assets/img/Articulos/sudadera_winter.png',
    'description': 'Winter'
})

addItem({
    'id_producto': 10,
    'name': 'Sueter',
    'img': '../assets/img/Articulos/sueter.jpg',
    'description': 'Sueter Gris'
})