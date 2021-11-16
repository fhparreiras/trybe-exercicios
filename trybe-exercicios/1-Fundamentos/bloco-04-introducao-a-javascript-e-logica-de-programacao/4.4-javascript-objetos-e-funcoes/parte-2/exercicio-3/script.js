//Exercício 3 - retorna o índice do menor valor de um dado array
function retornaMenor(array){
let numbers = array;
let menor = numbers[0];

for (let i = 0; i <= numbers.length; i += 1) {
    if (menor > numbers[i+1]) {
      menor = numbers[i+1];
   }
}
console.log(numbers.indexOf(menor));
}
retornaMenor([2, 4, 6, 7, 10, 0, -3]);
//6
