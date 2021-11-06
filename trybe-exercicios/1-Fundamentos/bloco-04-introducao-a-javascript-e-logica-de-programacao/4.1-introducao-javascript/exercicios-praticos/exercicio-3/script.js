//Exercício 3 - Retorna o maior entre três números
const a = 44;
const b = 25;
const c = 25;

if (a > b && a > c) {
    console.log("O maior número é o: " + a);
} else if (a < b && b > c) {
    console.log("O maior número é o: " + b);
} else if (a < c && c > b) {
    console.log("O maior número é o: " + c);
} else {
    console.log("Dois ou três números são iguais");
}