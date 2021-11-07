//Exercício 3 - Para um dado array, calcular a média artimética de seus valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = null;

for (let index = 0; index < numbers.length; index += 1) {
    count += numbers[index];
}

console.log(count/numbers.length);

//27.8