//Exercício 8 - Verifica se algum número é Par
const a = 2;
const b = 1;
const c = 9;

let aPar = a % 2 === 0;
let bPar = b % 2 === 0;
let cPar = c % 2 === 0;

//console.log(aPar, bPar, cPar);

if (aPar || bPar || cPar) {
    console.log('true');
} else {
    console.log('false');
}