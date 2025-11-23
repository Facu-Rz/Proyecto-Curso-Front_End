const Clave ="carrito"

export const carritoSave = (carrito) => {
    localStorage.setItem(Clave, JSON.stringify(carrito));
};

export const llamarCarrito = () => {
    return JSON.parse(localStorage.getItem(Clave))||[];
};

export const limpiarCarrito = () => {
    localStorage.removeItem(Clave);
};