debugger 
//---Ejemplo de iteración dinámico---//

let limite = parseInt(prompt ("Ingrese un número:"))

for (let i = 0; i< limite ; i++) {
    console.log("Hola", i)
}

//---Ejemplo de While---//

let continuar = true
let num = parseInt (prompt("Porfavor, ingrese número:"))
let factor = 1

while (continuar){
    console.log ("Resultado", num + factor)
    continuar = confirm ("¿Siguiente suma?")
    if (continuar){
        factor++
    }
}