import {llamarCarrito, limpiarCarrito} from "./productos.js";
import {eliminarProducto, vaciarCarrito} from "./funciones.js";
import {actualizarCarritoCont} from "./ui.js";

const renderizarCarrito= () => {
    const carrito= llamarCarrito();
    actualizarCarritoCont(carrito);

    const contenedor= document.getElementById("contenidoCarrito");
    const divAcciones= document.getElementById("accionesCarrito");

    contenedor.innerHTML= "";
    divAcciones.innerHTML= "";

    if (!carrito.length) {
        const mensaje= document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent= "El carrito no tiene productos"
        contenedor.appendChild(mensaje);
        return
    }

    carrito.forEach((producto, indice) => {
    const tarjeta= document.createElement("article")
    tarjeta.classList.add("tarjeta-producto");

    const img= document.createElement("img")
    img.src= producto.img
    img.alt= producto.nombre

    const titulo= document.createElement("h3")
    titulo.textContent= producto.nombre

    const precio= document.createElement("p")
    precio.textContent= `$${producto.precio}`

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton");
    botonEliminar.classList.add("boton-eliminar-carrito");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        eliminarProducto(indice);

        renderizarCarrito();
    });

    tarjeta.appendChild(img)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonEliminar);

    contenedor.appendChild(tarjeta);
    });

    const botonVaciar= document.createElement("button")
    botonVaciar.classList.add("boton");
    botonVaciar.classList.add("boton-vaciar-carrito");
    botonVaciar.textContent= "Vaciar carrito";
    botonVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(botonVaciar);
};

console.log(JSON.parse(localStorage.getItem("carrito")))
document.addEventListener("DOMContentLoaded", renderizarCarrito);