//Los tests de esta function ya están creados, debes crear la function a partir de ellos utilizando a ChatGPT.

function buscarPalabra(texto, palabra) {
   if (typeof texto !== 'string' || texto.trim() === '' || typeof palabra !== 'string' || palabra.trim() === '') {
      return [];
    }
   // Convertimos el texto y la palabra a minúsculas para hacer la búsqueda sin distinguir mayúsculas de minúsculas
  const textoMin = texto.toLowerCase();
  const palabraMin = palabra.toLowerCase();


  // Buscamos la palabra en el texto
  const inicio = textoMin.indexOf(palabraMin);
  
  // Si la palabra no se encuentra, retornamos un array vacío
  if (inicio === -1) {
    return [];
  }
  
  // Calculamos el índice de fin de la palabra
  const fin = inicio + palabraMin.length - 1;

  // Devolvemos el array con los índices de inicio y fin de la palabra encontrada
  return [inicio, fin];
}

module.exports = buscarPalabra;
