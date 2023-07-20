const validarCorreo = require('../03-regex');

const regex = validarCorreo();

test('Debe ser un correo electrónico válido', () => {
   expect(regex.test('ejemplo@dominio.com')).toBe(true);
});
test('Debe ser un correo electrónico no válido', () => {
   expect(regex.test('ejemplo@dominio')).toBe(false);
});
test('Debe ser un correo electrónico no válido', () => {
   expect(regex.test('ejemplodominio.com')).toBe(false);
});
