const suma = (uno,dos) => {
  let res
  res = uno + dos
  return res

}
const resta = (uno,dos) => {
  let res
  res = uno - dos
  return res

}

const funciones = {//guarda las funciones a testear
  suma,
  resta
}

module.exports = funciones//exporta el objeto
