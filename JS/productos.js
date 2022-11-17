function addItem(item) {
    for (let i = 0; i < productosjson.length; i++) {
        const itemHTML = `
            <div class="col p-2">
            <a href="./descripcion.html">    
            <button class="toDescription h-100" id= "${item[i].id_producto}">
                    <div class="card h-100"}">
                        <div class="p-4">
                            <img src="${item[i].img}" class="card-img-top img-fluid" alt="image">
                        </div>
                        <div class="card-body border-top d-flex flex-column" >
                            <h5 class="card-title">${item[i].name}</h5>
                            <p class="card-text flex-grow-1">${item[i].description}</p>
                            <p class="card-text">$${item[i].price} ${item[i].divisa}</p>
                        </div>
                    </div>
                </button>
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
        'price': 450,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/top_valeria.jpg',
        'description': 'Valeria',
        'detail': ''

    },
    {
        'id_producto': 2,
        'name': 'Falda Alicia',
        'price': 440,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/falda_alicia.png',
        'description': 'Alicia',
        'detail': ''
    },
    {
        'id_producto': 3,
        'name': 'Falda Pilar',
        'price': 420,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/falda_pilar.jpg',
        'description': 'Pilar',
        'detail': ''
    },
    {
        'id_producto': 4,
        'name': 'Jumpsuit Vinipiel',
        'price': 455,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/jumpsuit_vinipiel.jpg',
        'description': 'Vinipiel',
        'detail': ''
    },
    {
        'id_producto': 5,
        'name': 'Abrigo Moon',
        'price': 495,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/abrigo_moon.jpg',
        'description': 'Moon',
        'detail': ''
    },
    {
        'id_producto': 6,
        'name': 'Jumpsuit Animal Print',
        'price': 485,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/jumpsuit_animal_print.jpg',
        'description': 'Animal Print',
        'detail': ''
    },
    {
        'id_producto': 7,
        'name': 'Jumpsuit Edición Limitada ',
        'price': 445,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/jumpsuit_water.jpg',
        'secondImg': [

        ],
        'description': 'Edicion limitada',
        'detail': ''
    },
    {
        'id_producto': 8,
        'name': 'Sudadera Autum',
        'price': 500,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/sudadera_autum.png',
        'description': 'Autum',
        'detail': ''
    },
    {
        'id_producto': 9,
        'name': 'Sudadera Winter',
        'price': 499,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/sudadera_winter.png',
        'description': 'Winter',
        'detail': ''
    },
    {
        'id_producto': 10,
        'name': 'Sueter Gris',
        'price': 405,
        'divisa': 'usd',
        'img': '../assets/img/Articulos/sueter.jpg',
        'description': 'Sueter Gris',
        'detail': ''
    },
    {
        'id_producto': 11,
        'name': 'Pants Rex',
        'price': 499,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/pants_rex.jpg',
        'description': 'Rex',
        'detail': ''
    },
    {
        'id_producto': 12,
        'name': 'Jogger Rex ',
        'price': 405,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/jogger_rex.jpg',
        'description': 'Rex',
        'detail': ''
    },
    {
        'id_producto': 13,
        'name': 'Air Negro',
        'price': 499,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/air_negro.jpg',
        'description': 'Negro',
        'detail': ''
    },
    {
        'id_producto': 14,
        'name': 'Air Rosa',
        'price': 405,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/air_rosa.jpg',
        'description': 'Rosa',
        'detail': ''
    },
    {
        'id_producto': 15,
        'name': 'Sudadera Moon ',
        'price': 499,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/top_katherine.jpg',
        'description': 'Moon',
        'detail': ''
    },
    {
        'id_producto': 16,
        'name': 'Camisa Autum',
        'price': 405,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/CamisaAutum.jpg',
        'description': 'Autum',
        'detail': ''
    },
    {
        'id_producto': 17,
        'name': 'Camisa Moon',
        'price': 405,
        'divisa': 'mxn',
        'img': '../assets/img/Articulos/CamisaMoon.jpg',
        'description': 'Moon',
        'detail': ''
    }

];

addItem(productosjson);

let botons = document.getElementsByClassName("toDescription");
for (let boton of botons) {
    console.log(boton);
    boton.addEventListener('click', function () {
        let id = boton.id;
        let productSelect = productosjson.filter(producto => producto.id_producto == id)

        console.log(productSelect);

        localStorage.setItem("product", JSON.stringify(productSelect[0]));
    })
};
