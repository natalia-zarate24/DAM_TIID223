console.log("Hola Mundo NODE");
let edad = 19;
let edad2 = 8;
console.log("Edad Promedio: ");
console.log((edad + edad2)/2);

console.log("Medidor de Procesos");

console.time('miProceso');
    for(let i=0; i < 100000000; i++){}
console.timeEnd('miProceso');
