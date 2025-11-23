import {carritoSave, llamarCarrito, limpiarCarrito} from "./productos.js";
import {actualizarCarritoCont, mostrarMensaje} from "./ui.js";

export const nuevoProducto = (producto) => {
    const carrito= llamarCarrito();
    carrito.push(producto);

    carritoSave(carrito);

    actualizarCarritoCont(carrito);
    mostrarMensaje("Producto agregado con exito")
};

export const eliminarProducto = (indice) => {
    const carrito=llamarCarrito();
    carrito.splice(indice, 1);

    carritoSave(carrito);
    actualizarCarritoCont(carrito);
    mostrarMensaje("Producto eliminado con exito");
};

export const vaciarCarrito = () => {
    limpiarCarrito();
    actualizarCarritoCont([]);
    mostrarMensaje("Carrito vaciado");
};