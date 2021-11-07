//Exercício 4 - Para um dado array, calcular a média de seus valores, e imprimir frases personalizadas dependendo da faixa do valor do resultado
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = null;

for (let index = 0; index < numbers.length; index += 1) {
    count += numbers[index];
}
let media = count/numbers.length;

if (media > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log('Valor menor ou igual a 20.');
};