//Exercício 5 - Bônus
n = 7;
let triangulo = ['*'];
let espaco = ' ';

console.log(triangulo);
while (triangulo.length < ((n - 1) / 2) + 1) {
    triangulo.unshift('.');
}

while (triangulo.length < n) {
    triangulo.pop('.');
}

console.log(triangulo);