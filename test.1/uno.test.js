const funciones = require("./funciones")//importa archivo con funciones

console.log(funciones.suma)
console.log(funciones.resta)

//test suma
describe("Suma", () => {

  it("Se suma 1 + 1", () => {//caso especifico a cumplir
    expect(funciones.suma(1,1)).toBe(2)//resultado esperado

  })

})
describe("Se resta 1 - 1", () => {

  it("Se deben restar dos números", () => {//caso especifico a cumplir
    expect(funciones.resta(1,1)).toBe(0)//resultado esperado
  })

})
