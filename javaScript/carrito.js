document.getElementById("calcularTotal").addEventListener("click", function () {
    // Obtener valores de los dos productos
    const harryPotter = parseInt(document.getElementById("Harry Potter").value) || 0;
    const cienAniosSoledad = parseInt(document.getElementById("Cien Años de Soledad").value) || 0;

    // Calcular el total y mostrarlo
    const totalProductos = harryPotter + cienAniosSoledad;
    document.getElementById("totalProductos").innerHTML = totalProductos;
});
