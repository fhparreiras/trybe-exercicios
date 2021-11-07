//Exercício 9 - Dado um array, imprimir o resultado da divisão de cada elemento por 2.

let numbers = [];

for (let index = 0; index < 25; index +=1) {
    numbers.push(index+1);
}

for (let i = 0; i < numbers.length; i +=1) {
    let division = numbers[i]/2;
    console.log('O resultado de ' + numbers[i] + ' dividido por 2 = ' + division +'.');
}


// O resultado de 1 dividido por 2 = 0.5.
// O resultado de 2 dividido por 2 = 1.
// O resultado de 3 dividido por 2 = 1.5.
// O resultado de 4 dividido por 2 = 2.
// O resultado de 5 dividido por 2 = 2.5.
// O resultado de 6 dividido por 2 = 3.
// O resultado de 7 dividido por 2 = 3.5.
// O resultado de 8 dividido por 2 = 4.
// O resultado de 9 dividido por 2 = 4.5.
// O resultado de 10 dividido por 2 = 5.
// O resultado de 11 dividido por 2 = 5.5.
// O resultado de 12 dividido por 2 = 6.
// O resultado de 13 dividido por 2 = 6.5.
// O resultado de 14 dividido por 2 = 7.
// O resultado de 15 dividido por 2 = 7.5.
// O resultado de 16 dividido por 2 = 8.
// O resultado de 17 dividido por 2 = 8.5.
// O resultado de 18 dividido por 2 = 9.
// O resultado de 19 dividido por 2 = 9.5.
// O resultado de 20 dividido por 2 = 10.
// O resultado de 21 dividido por 2 = 10.5.
// O resultado de 22 dividido por 2 = 11.
// O resultado de 23 dividido por 2 = 11.5.
// O resultado de 24 dividido por 2 = 12.
// O resultado de 25 dividido por 2 = 12.5.

