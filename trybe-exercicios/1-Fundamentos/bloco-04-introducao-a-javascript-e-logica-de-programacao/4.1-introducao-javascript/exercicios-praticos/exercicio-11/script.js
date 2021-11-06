//Exercício 11 - Calcula salário líquido
const salarioBruto = 6000.00;
let valorInss = null;
let valorIr = null;

if (salarioBruto < 0) {
    return console.log('Valor de salário Inválido');
} else if (salarioBruto > 5189.82) {
    valorInss = 570.88;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    valorInss = salarioBruto * 0.11;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.93) {
    valorInss = salarioBruto * 0.09;
} else {
    valorInss = salarioBruto * 0.08;
}

let baseIr = salarioBruto - valorInss;
//console.log(valorInss);

if (salarioBruto <= 1903.98) {
    valorIr = 0;
} else if (salarioBruto > 1903.98 && salarioBruto <= 2826.65){
    valorIr = (baseIr * 0.075) - 142.80;
} else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05){
    valorIr = (baseIr * 0.15) - 354.80;
} else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68){
    valorIr = (baseIr * 0.225) - 636.13;
} else if (salarioBruto > 4664.68) {
    valorIr = (baseIr * 0.275) - 869.36;
}


let salarioLiquido = baseIr - valorIr;

console.log('O salário líquido calculado foi de R$' + salarioLiquido);