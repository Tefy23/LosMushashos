let tabla = document.getElementById("tablaCompras");
let total = document.getElementById("total");

tabla.innerHTML+= `<thead>
<tr>
  <th scope="col">ID</th>
  <th scope="col">Producto</th>
  <th scope="col">Precio</th>
</tr>
</thead>`

let carritoLleno =localStorage.getItem("carrito")
if (carritoLleno) {
    let suma = 0
    let carrito = JSON.parse(carritoLleno)
    carrito.forEach(element => {
        tabla.innerHTML+= `<tbody>
      <tr>
        <th scope="row">${element.productoId}</th>
        <td>${element.nombrePrenda}</td>
        <td>${element.precio.split(" ")[0]}</td>
      </tr>
      </tbody>`;
      suma+= parseFloat(element.precio.split(" ")[0].split("$")[1])
      total.innerHTML=`TOTAL DE COMPRA: ${suma}`
    });
}


  
  /********************Eliminar Items ***************/
  
 /*  let remove = obj => {
    arregloCarrito.splice($(obj).parent().parent().index(),1); //elimina el elemento del arreglo carrito. 
    $(obj).parent().parent().remove(); //elimina la fila de mi tabla. 
  }
  
   */
  
  /******* */ /* esta función lee los elementos de mi carrito *********** */ 
  
 /*  let body; */
  
  
/*   function carritoPrueba() {
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
  
  } */