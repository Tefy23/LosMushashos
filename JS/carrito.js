function cargarCarrito() {

    let main = document.getElementById("main");
    main.innerHTML =
  
      `<main class="container-fluid">
    <page-title class="row justify-content-center my-3">
    <!-- <div class="col text-center">
        <h1>Mi Carrit UwU</h1>
      </div> -->
    </page-title>
    <section class="row m-2">
      <!--- Artículos del carrito --->
      <section class="col-sm-12 mb-2 my-2">
        <!--- Elemento en carrito -->
            <div <h2 class="text-center">Tu carrito</h2></div>
            <div class="text-center">
            <div class="row">
              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Borrar</th>
                  </tr>
                </thead>
                <tbody id="body"></tbody>
              </table>
              <hr>
              <div id="TotalCarrito" class="col-sm-7 my-auto text-center" style="display:none">
              </div>
              
              <div class="col-sm-3 text-center my-2">
                <button href="#" class="btn btn-light" ${arregloCarrito.length==0 ? "disabled" : ""}> Pagar </button>
              </div>
            </div>
            <div class="row">
                <div class="col text-center mt-4">
                    <small class="text-muted">
                    ¿Tienes un problema con tu compra? ¡Contáctanos!
                </small>
                  </div>
            </div>
          </div>
        </div>
        <!--- Carta con botón de pago-->
        
      </section>`;
    carritoPrueba();
  };
  
  
  /********************Eliminar Items ***************/
  
  let remove = obj => {
    arregloCarrito.splice($(obj).parent().parent().index(),1); //elimina el elemento del arreglo carrito. 
    $(obj).parent().parent().remove(); //elimina la fila de mi tabla. 
  }
  
  
  
  /******* */ /* esta función lee los elementos de mi carrito *********** */ 
  
  let body;
  
  
  function carritoPrueba() {
    let listaHtml = "";
    let total = 0;
    arregloCarrito.forEach(jsonCarrito => {
      listaHtml += `<tr><td><img src= ${jsonCarrito.imagenes} style="width:100px;heigth:100px;"></td>
        <td> ${jsonCarrito.name} </td>
        <td> ${jsonCarrito.price} </td>
        <td> <input type="number" value = ${jsonCarrito.cantidad}  min="1" pattern="^[1-50]" style="width:45px;"> </td> 
        <td> ${jsonCarrito.price * Number(jsonCarrito.cantidad)} </td>
        <td><a href="#" onclick="remove(this)"><img src="./assets/img/trash.png" style="width:20px;heigth:20px;"></a></td>`
        total += jsonCarrito.price * jsonCarrito.cantidad;
    });
  
   //pinta mi total
    $("#TotalCarrito").append(`<h5> Total carrito ${total}</h5>`).show();
  
    body = document.getElementById("body");
    body.innerHTML = listaHtml;
  
  }