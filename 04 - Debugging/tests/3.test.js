const isPalindrome = require('../Ejercicio 03');

test('isPalindrome returns true for palindromic strings', () => {
   expect(isPalindrome('radar')).toBe(true);
   expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
   expect(isPalindrome('Madam Arora teaches malayalam')).toBe(false);
});

test('isPalindrome returns false for non-palindromic strings', () => {
   expect(isPalindrome('hello')).toBe(false);
   expect(isPalindrome('OpenAI')).toBe(false);
   expect(isPalindrome('This is not a palindrome')).toBe(false);
});

test('isPalindrome ignores case and non-alphanumeric characters', () => {
   expect(isPalindrome('Racecar')).toBe(true);
   expect(isPalindrome('Able was I, ere I saw Elba')).toBe(true);
   expect(isPalindrome('Palindrome12321emordnilaP')).toBe(true);
});
