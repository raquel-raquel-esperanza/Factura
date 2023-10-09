// listen-line.js

// Definir una matriz global para almacenar los datos de las líneas de productos
const lineasProductosData = [];

// Escucha los cambios en las líneas de productos en tiempo real
document.getElementById('lineas-productos').addEventListener('input', function(event) {
    const linea = event.target.closest('div'); // Encuentra la línea de productos actual
    if (!linea) return; // Salir si no se encuentra una línea
  
    const producto = linea.querySelector('input[type="text"]').value;
    const cantidad = linea.querySelector('input[type="number"]:first-child').value;
    const precio = linea.querySelector('input[type="number"]:last-child').value;
  
    // Obtener el índice de la línea actual en lineasProductosData
    const indice = Array.from(document.querySelectorAll('#lineas-productos div')).indexOf(linea);
  
    // Actualizar lineasProductosData con los valores de la línea actual
    if (lineasProductosData[indice]) {
      lineasProductosData[indice].producto = producto;
      lineasProductosData[indice].cantidad = cantidad;
      lineasProductosData[indice].precio = precio;
    } else {
      lineasProductosData.push({ producto, cantidad, precio });
    }
  
    // Puedes hacer lo que quieras con los valores aquí, por ejemplo, imprimirlos en la consola
    console.log(`Producto: ${producto}, Cantidad: ${cantidad}, Precio Unitario: ${precio}`);
  
    // También puedes imprimir lineasProductosData en la consola para verificar los datos en tiempo real
    console.log('lineasProductosData:', lineasProductosData);
  });
  