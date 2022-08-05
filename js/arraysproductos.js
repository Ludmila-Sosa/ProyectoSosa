//--Tienda Stay--//

function ingresarNombre() {
    alert("Bienvenido a ♡Tienda Stay♡")
    let nombre = prompt("Ingresa tu nombre")
    while (nombre === "" || nombre === null) {
      nombre = prompt("Ingresa tu nombre")
    }
}

class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}

function creoID(){return parseInt(Math.random()*10000)}

const productos =[]
const IVA = 1.21

function agregoProductos(){
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingrese importe:"))
        productos.push(new Producto(id, descripcion, precio))
        console.table(productos)
}

function listaProductos(){
    productos.push(new Producto(0567, "PELUCHES SKZOO", 2000))
    productos.push(new Producto(1387, "BUZO STRAY KIDS", 5000))
    productos.push(new Producto(2987,"POSTERS", 500))
    productos.push(new Producto(3485, "ÁLBUM ODDINARY", 15000))
    productos.push(new Producto(4587,"ÁLBUM NOEASY", 10000))
    productos.push(new Producto(5837,"REMERA PERSONALIZADA SKZ",2500))
    console.table(productos)
}

function recorrerProductos(){
    debugger
    for (let producto of productos){
        console.table(producto)
    }
}

ingresarNombre()