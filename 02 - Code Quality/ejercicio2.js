/**
 * Realiza operaciones en el array de entrada y devuelve un resultado basado en ciertas condiciones.
 * Si la suma filtrada del array es mayor a 1000, se realizan operaciones adicionales con la variable temporal `temp`.
 * Si la suma filtrada del array es menor o igual a 1000, se agrega un contador al resultado y se muestra como una cadena.
 * @param {number[]} array - Un array de números enteros.
 * @returns {number|string} - El resultado de acuerdo con las condiciones establecidas.
 */
function complicatedLevelTwo(array) {
   // Multiplicamos cada elemento del array por 2, filtramos los divisibles por 3 y sumamos los filtrados.
   let result = array
     .map((x) => x * 2)
     .filter((x) => x % 3 === 0)
     .reduce((acc, curr) => acc + curr, 0);
     console.log(result)
 
   if (result > 1000) {
     // Si el resultado es mayor a 1000, realizamos operaciones adicionales con `temp`.
     let temp = result;
     for (let i = 0; i < 10; i++) {
       temp -= i;
       temp *= 2;
     }
     return temp; // Devolvemos `temp` como resultado.
   } else {
     // Si el resultado es menor o igual a 1000, agregamos un contador y mostramos el resultado como una cadena.
     let count = 0;
     while (count < 3) {
       result += count;
       count++;
     }
     return `The final result is: ${result}`; // Devolvemos el resultado como cadena.
   }
 }

// function complicatedLevelTwo(array) {
//    var result = array
//       .map((x) => x * 2)
//       .filter((x) => x % 3 === 0)
//       .reduce((acc, curr) => acc + curr, 0);

//    if (result > 1000) {
//       var temp = result;
//       for (var i = 0; i < 10; i++) {
//          temp -= i;
//          temp *= 2;
//       }
//       return temp;
//    } else {
//       var count = 0;
//       while (count < 3) {
//          result += count;
//          count++;
//       }
//       var str = 'The final result is: ' + result;
//       return str;
//    }
// }

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(complicatedLevelTwo(array));
