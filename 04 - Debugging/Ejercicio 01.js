const findLargestWord = (sentence) => {
   let words = sentence.replace(/[^\w\s]/g, '').split(/\s+/);
   let largestWord = '';

   words.forEach((word) => {
      if (word.length > largestWord.length) {
         largestWord = word;
      }
   });

   return largestWord;
};

module.exports = findLargestWord;
