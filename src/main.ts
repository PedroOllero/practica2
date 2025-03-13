let amigos: number = 6;
let precioCena: number = 120;
let bebidas: number = 18;

const cuantoPago: number = (precioCena - bebidas)/(amigos + 1);

//Aquí paso a dos decimales
let resultado: string = cuantoPago.toFixed(2)

console.log(resultado)