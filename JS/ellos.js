function addItem(item) {
    let categoriaFiltrada = " ";
    for (let i = 0; i < item.length; i++) {
        categoriaFiltrada = item.filter(categoria => categoria.target == "Ellos")
        console.log(categoriaFiltrada[i])
        const itemHTML = `
            <div class="col p-2">
            <a href="./descripcion.html">    
            <button class="toDescription h-100" id= "${categoriaFiltrada[i].productoId}">
                    <div class="card h-100"}">
                        <div class="p-4">
                            <img src="${categoriaFiltrada[i].imgPrincipal}" class="card-img-top img-fluid" alt="image">
                        </div>
                        <div class="card-body border-top d-flex flex-column" >
                            <h5 class="card-title">${categoriaFiltrada[i].nombrePrenda}</h5>
                            <p class="card-text flex-grow-1">${categoriaFiltrada[i].descripcion}</p>
                            <p class="card-text">$${categoriaFiltrada[i].precio} ${categoriaFiltrada[i].divisa}</p>
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


fetch("https://wicsha.herokuapp.com/api/producto")
    .then(res => res.json())
    .then(res => {
        addItem(res);
        Mau(res);
    })


function Mau(productosjson) {
    let botons = document.getElementsByClassName("toDescription");
    for (let boton of botons) {

        boton.addEventListener('click', function () {
            let id = boton.id;
            let productSelect = productosjson.filter(producto => producto.productoId == id);

            console.log(productSelect);

            localStorage.setItem("product", JSON.stringify(productSelect[0]));
        })
    };
}