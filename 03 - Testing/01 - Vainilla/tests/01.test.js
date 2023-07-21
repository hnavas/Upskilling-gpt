// Importamos la función a probar
const esPalindromo = require('../Ejercicio 01'); // Actualiza la ruta al archivo que contiene la función

// Test suite o grupo de pruebas
describe('Función esPalindromo', () => {
  // Test 1: Verificar si una palabra palíndroma se identifica correctamente
  test('Debe devolver true para un palíndromo', () => {
    expect(esPalindromo('reconocer')).toBe(true);
    expect(esPalindromo('Reconocer')).toBe(true); // Palíndromo con mayúsculas
  });

  // Test 2: Verificar si una palabra no palíndroma se identifica correctamente
  test('Debe devolver false para un no palíndromo', () => {
    expect(esPalindromo('javascript')).toBe(false);
  });

  // Test 3: Verificar si el string vacío es considerado palíndromo
  test('El string vacío debe ser considerado palíndromo', () => {
    expect(esPalindromo('')).toBe(true);
  });

  // Test 4: Verificar si se lanza un error al recibir un argumento inválido
  test('Debe lanzar un error al recibir un argumento inválido', () => {
    expect(() => esPalindromo(123)).toThrow('Se esperaba una cadena de texto como argumento');
    expect(() => esPalindromo(true)).toThrow('Se esperaba una cadena de texto como argumento');
    expect(() => esPalindromo(null)).toThrow('Se esperaba una cadena de texto como argumento');
  });
});
