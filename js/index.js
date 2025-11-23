import {nuevoProducto} from "./funciones.js";
import {llamarCarrito} from "./productos.js";
import {actualizarCarritoCont, mostrarMensaje} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor= document.getElementById("contenedor-tarjetas");
    const carrito= llamarCarrito();
    actualizarCarritoCont(carrito);

    fetch("./data/productos.json")
    .then((response) => {
        if(!response.ok) {
            throw new Error(`Error HTTP status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
    data.forEach((producto) => {
    const tarjeta= document.createElement("article")
    tarjeta.classList.add("tarjeta-producto");

    const img= document.createElement("img")
    img.src= producto.img
    img.alt= producto.nombre

    const titulo= document.createElement("h3")
    titulo.textContent= producto.nombre

    const precio= document.createElement("p")
    precio.textContent= `$${producto.precio}`

    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.textContent = "Agregar al carrito";

    
    boton.addEventListener("click", () => {
        nuevoProducto(producto);
    });

    tarjeta.appendChild(img)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)

    contenedor.appendChild(tarjeta)
    })
    })
    .catch((error) => console.log(error));
});
