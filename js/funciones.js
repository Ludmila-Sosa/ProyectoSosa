//--Tienda Stay--//

function ingresarNombre(){
    alert("Bienvenido a Tienda Stay")
    let nombre = prompt("Ingrese su nombre:")
    while(nombre===""||nombre=== null){
     nombre = prompt("Ingrese su nombre:")
    }
}

function mostrarProductos(){
    let producto
    do{
        producto = prompt("Que quieres comprar? \n1)Peluches SKZOO \n2)Discografía de Stray Kids \n3)Posters y Photocards")
    } while (producto != 1 && producto != 2 && producto != 3)

    switch(producto){
        case "1":
            return "Peluches SKZOO"
        case "2":
            return "Discografía de Stray Kids"
        case "3":
            return "Posters y Photocards"        
    }
}

function validarPrecio(producto){
    if(producto == "Peluches SKZOO"){
        return 2500
    }else if(producto == "Discografía de Stray Kids"){
        return 4500
    }else{
        return 200
    }       
}

function cobrar(producto, precio){
    alert(
        "Eligió este producto:"+producto.toUpperCase()+"\nPrecio $" + precio
    )
}

ingresarNombre()
let productoElegido = mostrarProductos()
let precioProduct = validarPrecio(productoElegido)
cobrar(productoElegido,precioProduct)