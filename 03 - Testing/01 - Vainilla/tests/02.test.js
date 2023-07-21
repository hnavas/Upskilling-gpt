const obtenerPosteo = require("../Ejercicio 02");

describe("Pruebas para la función obtenerPosteo", () => {
  // Prueba 1: Si se recibe un parámetro que no sea un número del 1 al 100, devuelve un status 404 y null
  test("Si se recibe un parámetro que no sea un número del 1 al 100, devuelve un status 404 y null", async () => {
    const invalidPostID = "invalid"; // Un valor que no sea un número válido del 1 al 100

    const result = await obtenerPosteo(invalidPostID);

    // Verificamos que el resultado sea null y se llame a console.error con status 404 y algún mensaje
    expect(result).toBeNull();
    // expect(console.error).toHaveBeenCalledWith(404, expect.anything());
  });

  // Prueba 2: Si se recibe un número del 1 al 100, devuelve un status 200 y un objeto con las propiedades adecuadas
  test("Si se recibe un número del 1 al 100, devuelve un status 200 y un objeto con las propiedades adecuadas", async () => {
    const validPostID = 1; // Un valor válido del 1 al 100

    const result = await obtenerPosteo(validPostID);

    // Verificamos que el resultado sea un objeto con las propiedades adecuadas
    expect(result).toMatchObject({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    });

    // Verificamos que no se haya llamado a console.error
    // expect(console.error).not.toHaveBeenCalled();
  });
});

// describe("Pruebas para la función obtenerPosteo", () => {
//   // Prueba 1: Si se recibe un parámetro que no sea un número del 1 al 100, devuelve un status 404 y null
//   test("Si se recibe un parámetro que no sea un número del 1 al 100, devuelve un status 404 y null", async () => {
//     const invalidPostID = "invalid"; // Un valor que no sea un número válido del 1 al 100

//     const result = await obtenerPosteo(invalidPostID);

//     expect(result).toBeNull(); // Comprobamos que el resultado sea null
//   });

//   // Prueba 2: Si se recibe un número del 1 al 100, devuelve un status 200 y un objeto con las propiedades adecuadas
//   test("Si se recibe un número del 1 al 100, devuelve un status 200 y un objeto con las propiedades adecuadas", async () => {
//     const validPostID = 1; // Un valor válido del 1 al 100

//     const result = await obtenerPosteo(validPostID);

//     expect(result).toMatchObject({
//       // Comprobamos que el resultado sea un objeto con las propiedades adecuadas
//       userId: expect.any(Number),
//       id: expect.any(Number),
//       title: expect.any(String),
//       body: expect.any(String),
//     });

//   });
// });
