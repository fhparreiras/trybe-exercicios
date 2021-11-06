//Exercício 5 - verificando se os ângulos de um triângulo são válidos
const anguloUm = 34;
const anguloDois = 65;
const anguloTres = 81;
const somaAngulos = anguloUm + anguloDois + anguloTres;

let checaAngulo = somaAngulos === 180;
if (anguloUm < 0 || anguloDois < 0 || anguloTres < 0) {
    checaAngulo = "inválido";
}
console.log(checaAngulo);