// agregar-linea.js



document.getElementById('agregar-linea').addEventListener('click', function() {
  const lineasProductos = document.getElementById('lineas-productos');
  const nuevaLinea = document.createElement('div');
  nuevaLinea.innerHTML = `
    <label for="producto" class="campo">Producto:</label>
    <input type="text" class="campo">

    <label for="cantidad" class="campo">Cantidad:</label>
    <input type="number" class="campo">

    <label for="precio" class="campo">Precio Unitario:</label>
    <input type="number" class="campo">
  `;
  lineasProductos.appendChild(nuevaLinea);
  
 
});
