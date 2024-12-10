console.log("Script app.js cargado"); // Verificación inicial

const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';

// Función para obtener y mostrar una nueva cita
function fetchQuote() {
  console.log("Intentando obtener una cita..."); // Seguimiento de llamada
  fetch(API_URL)
    .then(response => {
      console.log("Respuesta recibida:", response); // Verificación de respuesta
      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Datos obtenidos:", data); // Ver datos en consola
      displayQuote(data);
    })
    .catch(error => {
      console.error('Error al obtener la cita:', error);
      showError(); // Mostrar mensaje de error al usuario
    });
}

// Función para mostrar la cita en el contenedor
function displayQuote(quoteData) {
  const container = document.getElementById('quote-container');
  container.innerHTML = `
    <p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>
  `;
  console.log("Cita mostrada correctamente");
}

// Función para manejar errores en la carga
function showError() {
  const container = document.getElementById('quote-container');
  container.innerHTML = `
    <p><strong>Error:</strong> No se pudo cargar la cita. Intenta nuevamente más tarde.</p>
  `;
}

// Escuchar el evento del botón para nuevas citas
document.getElementById('new-quote').addEventListener('click', fetchQuote);

// Llamar a la función al cargar la página
fetchQuote();
