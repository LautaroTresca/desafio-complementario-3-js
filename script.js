let usuario = prompt("Hola, ¿como te llamas?")

const pUsuario = document.getElementById("user")

pUsuario.innerHTML += `<p>Bienvenido ${usuario}`

class Producto {
    constructor(producto, color, talle, precio){
        this.producto = prompt("Ingrese la prenda")
        this.color = prompt("Ingrese el color de la prenda")
        this.talle = prompt("Ingrese el talle")
        this.precio = parseInt(prompt("Ingrese el precio de la prenda"))
    } 
}
    

const producto1 = new Producto()
const producto2 = new Producto()
const producto3 = new Producto()
const producto4 = new Producto()

const productos = [producto1, producto2, producto3, producto4]


const divRopa = document.getElementById("ropa")

productos.forEach(productos => {
    divRopa.innerHTML += `
        <div>
            <p>Nombre: ${productos.producto}</p>
            <p>Color: ${productos.color}</p>
            <p>Talle: ${productos.talle}</p>
            <p>Precio: $${productos.precio}</p>
        </div>
    `
})