document.addEventListener('DOMContentLoaded', () => {
  const botonSaludo = document.getElementById('boton-saludo');
  const botonInfo = document.getElementById('boton-info');
  const saludoElement = document.getElementById('saludo');

  if (botonSaludo) {
    botonSaludo.addEventListener('click', () => {
      saludoElement.textContent = '✨ ¡Hola! Bienvenido al CV desplegado de Ruberth Tapara.';
      saludoElement.style.color = '#38bdf8';
    });
  }

  if (botonInfo) {
    botonInfo.addEventListener('click', () => {
      const fecha = new Date().toLocaleTimeString();
      saludoElement.textContent = `🚀 Servidor activo en Render. Hora del cliente: ${fecha}`;
      saludoElement.style.color = '#4ade80';
    });
  }
});