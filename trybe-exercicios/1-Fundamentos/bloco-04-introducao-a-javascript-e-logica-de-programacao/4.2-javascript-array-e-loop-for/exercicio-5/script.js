//Exercício 5 - Para um dado array, descobrir e imprimir o maior valor utilizado o FOR.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (i = 0; i < numbers.length; i +=1) {
    if (numbers[i] > numbers[i-1] && numbers[i] > maior){
       maior = numbers[i];
    }
}

console.log(maior);

//100