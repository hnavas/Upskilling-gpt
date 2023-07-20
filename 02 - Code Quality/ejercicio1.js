/**
 * Calcula un resultado basado en la suma de los elementos del array dado.
 * Si el último elemento del array es par, el resultado se multiplica por su índice.
 * Si el último elemento es impar, el resultado se resta por su índice.
 * @param {number[]} arr - Un array de números enteros.
 * @returns {number} - El resultado de acuerdo con las reglas establecidas.
 */
function complicatedLevelOne(arr) {
   // Comprobamos si el argumento es un array y si contiene elementos
   if (!Array.isArray(arr) || arr.length === 0) {
     throw new Error('El argumento debe ser un array no vacío.');
   }
 
   // Inicializamos el resultado en cero.
   var result = 0;
 
   // Iteramos a través de los elementos del array y los sumamos al resultado.
   for (var i = 0; i < arr.length; i++) {
     result += arr[i];
   }
 
   // Obtenemos el último elemento del array.
   var lastElement = arr[arr.length - 1];
 
   // Verificamos si el último elemento es par o impar y realizamos la operación correspondiente.
   if (lastElement % 2 === 0) {
     result *= i; // Multiplicamos el resultado por el índice de la iteración (i).
   } else {
     result -= i; // Restamos el índice de la iteración (i) al resultado.
   }
 
   // Retornamos el resultado final.
   return result;
 }
 

// function complicatedLevelOne(arr) {
//    var result = 0;

//    for (var i = 0; i < arr.length; i++) {
//       result += arr[i];
//    }

//    if (arr[i] % 2 === 0) {
//       result *= i;
//    } else {
//       result -= i;
//    }

//    return result;
// }

console.log(complicatedLevelOne([3, 5, 2, 6, 3, 5]));
console.log(complicatedLevelOne([3, 5, 2, 6, 3, 4]));
