//Exercício 9 - Verifica se pelo menos um dos números é ímpar
const a = 2;
const b = 4;
const c = 7;

let aImpar = a % 2 !== 0;
let bImpar = b % 2 !== 0;
let cImpar = c % 2 !== 0;


if (aImpar || bImpar || cImpar) {
    console.log('true');
} else {
    console.log('false');
}