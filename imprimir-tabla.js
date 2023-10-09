// imprimir-tabla.js

document.getElementById('imprimir-factura').addEventListener('click', function() {
  const cliente = document.getElementById('cliente').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;

  // Crear la tabla
  let tabla = '<h2>Factura</h2>';
  tabla += '<table border="1">';
  tabla += '<tr><th>Cliente</th><th>Dirección</th><th>Teléfono</th><th>Fecha</th></tr>';
  tabla += `<tr><td>${cliente}</td><td>${direccion}</td><td>${telefono}</td><td>${fecha}</td></tr>`;
  tabla += '</table>';

  // Agregar productos a la tabla
  tabla += '<h3>Productos</h3>';
  tabla += '<table border="1">';
  tabla += '<tr><th>Producto</th><th>Cantidad</th><th>Precio Unitario</th></tr>';

  for (let i = 0; i < lineasProductosData.length; i++) {
    tabla += `<tr><td>${lineasProductosData[i].producto.value}</td><td>${lineasProductosData[i].cantidad.value}</td><td>${lineasProductosData[i].precio.value}</td></tr>`;
    
  }

  tabla += '</table>';

  // Imprimir la tabla en una nueva ventana
  const ventanaImpresion = window.open('', '', 'width=600,height=600');
  ventanaImpresion.document.write(tabla);

  ventanaImpresion.print();

});
