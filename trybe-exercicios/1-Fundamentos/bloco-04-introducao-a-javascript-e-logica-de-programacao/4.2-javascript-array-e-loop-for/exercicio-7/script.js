//Exercício 7 - Utilizando for , descubra qual o menor valor contido em um dado array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (i = 0; i < numbers.length; i +=1) {
    if (numbers[i] < numbers[i-1] && numbers[i] < menor){
       menor = numbers[i];
    }
}

console.log(menor);

//2