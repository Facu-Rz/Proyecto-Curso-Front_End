export const actualizarCarritoCont = (carrito) => {
    const contador = document.getElementById("contadorCarrito")
    if(contador){
        contador.textContent=carrito.length
    };
}

export const mostrarMensaje = (texto) => {
    alert(texto);
}