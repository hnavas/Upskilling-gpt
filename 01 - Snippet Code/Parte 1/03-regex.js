// Este regex debe validar que un string sea un correo electrónico válido.

function validarCorreo() {
   let tuRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return tuRegex;
}

module.exports = validarCorreo;
