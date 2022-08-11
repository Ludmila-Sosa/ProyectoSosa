//--Tienda Stay--//

function ingresarNombre() {
    alert("Bienvenido a ♡Tienda Stay♡")
    let nombre = prompt("Ingresa tu nombre")
    while (nombre === "" || nombre === null) {
      nombre = prompt("Ingresa tu nombre")
    }
}

ingresarNombre()

let stockProductos= [
    {id:1, nombre: "Peluches SKZOO", desc: "Tierno peluche SKZOO", precio: 3500},
    {id:2, nombre: "Buzo Stray Kids", desc: "Buzo estampado", precio: 5000},
    {id:3, nombre: "Álbum ODDINARY", desc: "Incluye photocards y posters", precio: 13500},
    {id:4, nombre: "Álbum MIXTAPE", des: "Discografía oficial de Stray Kids", precio: 10000},
    {id:5, nombre: "Remera BangChan", desc: "Remera excelente calidad de BCH97", precio: 5500},
    {id:6, nombre:"Posters y Photocards", desc: "Posters y photocards", precio: 600},
]

console.table(stockProductos)

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {
    let elijoProducto = parseInt(prompt('Ingrese el ID de el producto que desee comprar')) 

    let productoAgregar = stockProductos.find((el) => el.id == elijoProducto)
    carritoDeCompras.push(productoAgregar)
     console.log(carritoDeCompras)
    actualizarCarrito()
}

function actualizarCarrito() {
    console.log('Cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    console.log('La suma total de tu carrito es $' + suma)
}

