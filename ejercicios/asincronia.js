
function saludo(nombre){
    return `Hola ${nombre} `
}

const nombre = "Natalia"
const saludar = saludo(nombre)
//console.log(saludar)

const p1 = Promise.resolve(1)

console.log(p1)

p1
    .then(x=> x + 5)
    .then(x => Promise.resolve( x + 5))
    .then(x => Promise.reject('Error'))
    .then(x => console.log('Esto no se va a llamar'))
    .catch(e => console.log(e))