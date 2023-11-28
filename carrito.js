document.getElementById("calcularTotal").addEventListener("click", function () {
    // Obtener valores de los dos productos
    const cantidadProducto1 = parseInt(document.getElementById("cantidadProducto1").value) || 0;
    const cantidadProducto2 = parseInt(document.getElementById("cantidadProducto2").value) || 0;

    // Calcular el total y mostrarlo
    const totalProductos = cantidadProducto1 + cantidadProducto2;
    document.getElementById("totalProductos").innerHTML = totalProductos;
});
