/**
 * Devuelve una cadena formateada según las propiedades del objeto dado.
 * Si el valor de una propiedad es par, se agrega la propiedad seguida de ' is even. '.
 * Si el valor es impar, se agrega la propiedad repetida el valor de veces que tiene el valor.
 * Luego, la cadena formateada se repite según la suma de todos los valores del objeto y se devuelve en mayúsculas y en orden inverso.
 *
 * @param {Object} obj - Un objeto con propiedades numéricas.
 * @returns {string} - La cadena formateada en mayúsculas y en orden inverso.
 */
function formatObjectProperties(obj) {
   // Variable para almacenar la cadena formateada.
   let result = '';
 
   // Variable para almacenar la suma de todos los valores del objeto.
   let sum = 0;
 
   // Iteramos sobre las propiedades del objeto.
   for (const key in obj) {
     // Verificamos que la propiedad sea propia del objeto y no heredada.
     if (obj.hasOwnProperty(key)) {
       // Obtenemos el valor correspondiente a la propiedad.
       const value = obj[key];
 
       // Si el valor es par, agregamos la propiedad seguida de ' is even. '.
       if (value % 2 === 0) {
         result += key + ' is even. ';
       } else {
         // Si el valor es impar, agregamos la propiedad repetida el valor de veces que tiene el valor.
         result += key.repeat(value) + ', ';
       }
 
       // Sumamos el valor al total acumulado.
       sum += value;
     }
   }
 
   // Variable para almacenar la cadena final repetida según la suma de los valores.
   let finalResult = '';
 
   // Repetimos la cadena formateada según la suma de todos los valores del objeto.
   for (let i = 0; i < sum; i++) {
     finalResult += result;
   }
 
   // Devolvemos la cadena final en mayúsculas y en orden inverso.
   return finalResult.toUpperCase().split('').reverse().join('');
 }
 

// function complicatedLevelThree(obj) {
//    var result = '';
//    var keys = Object.keys(obj);
//    var values = Object.values(obj);
//    var sum = values.reduce((acc, curr) => acc + curr, 0);

//    for (var i = 0; i < keys.length; i++) {
//       var key = keys[i];
//       var value = values[i];
//       if (value % 2 === 0) {
//          result += key + ' is even. ';
//       } else {
//          var temp = value;
//          while (temp > 0) {
//             result += key + ', ';
//             temp--;
//          }
//       }
//    }

//    var finalResult = '';
//    var count = 0;
//    while (count < sum) {
//       finalResult += result;
//       count++;
//    }

//    var reversedResult = finalResult.split('').reverse().join('');
//    var formattedResult = reversedResult.toUpperCase();

//    return formattedResult;
// }

var obj = {
   a: 2,
   b: 3,
   c: 4,
   d: 5,
};

// console.log(complicatedLevelThree(obj));
console.log(formatObjectProperties(obj));
