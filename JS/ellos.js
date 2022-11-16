function addItem(item) {
    for (let i = 0; i < productosjson.length; i++) {
        const itemHTML = `
            <div class="col p-2">
            <a href="./descripcion.html">    
            <button class="toDescription" id= "${item[i].id_producto}">
                    <div class="card h-100"}">
                        <div class="p-4">
                            <img src="${item[i].img}" class="card-img-top img-fluid" alt="image">
                        </div>
                        <div class="card-body border-top d-flex flex-column" >
                            <h5 class="card-title">${item[i].name}</h5>
                            <p class="card-text">${item[i].description}</p>
                            <p class="card-text">${item[i].price}</p>
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
        'id_producto': 5,
        'name': 'Abrigo Moon',
        'price': '$495 mxn',
        'img': '../assets/img/Articulos/abrigo_moon.jpg',
        'description': 'Abrigo negro',
        'detail': ''
    },
    {
        'id_producto': 8,
        'name': 'Sudadera',
        'price': '$500 mxn',
        'img': '../assets/img/Articulos/sudadera_autum.png',
        'description': 'Autum',
        'detail': ''
    },
    {
        'id_producto': 9,
        'name': 'Sudadera Winter',
        'price': '$499 mxn',
        'img': '../assets/img/Articulos/sudadera_winter.png',
        'description': 'Winter',
        'detail': ''
    },
    {
        'id_producto': 10,
        'name': 'Sueter',
        'price': '$405 mxn',
        'img': '../assets/img/Articulos/sueter.jpg',
        'description': 'Sueter Gris',
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
