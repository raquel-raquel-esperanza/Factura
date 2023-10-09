function obtenerFechaActual() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${año}-${mes}-${dia}`;
  }

  document.getElementById('fecha').value = obtenerFechaActual();
