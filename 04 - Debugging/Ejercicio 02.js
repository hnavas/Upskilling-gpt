//Esta función tiene como objetivo retornar un nuevo array con los elementos únicos del array de entrada
const getUniqueElements = (arr) => {
   if (!Array.isArray(arr)) return [];

   const uniqueElementsSet = new Set();
   const uniqueElementsArray = [];

   arr.forEach((element) => {
      if (!uniqueElementsSet.has(element)) {
         uniqueElementsSet.add(element);
         uniqueElementsArray.push(element);
      }
   });

   return uniqueElementsArray;
};

getUniqueElements();

module.exports = getUniqueElements;
