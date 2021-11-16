//Parte 2 - Exercício 2
function retornaMaior (array){
   let numbers = array;
   let maior = numbers[0];

for (let i = 0; i <= numbers.length; i += 1) {
    if (maior < numbers[i+1]) {
      maior = numbers[i+1];
   }
}
console.log(numbers.indexOf(maior));
}

retornaMaior([2,3,6,7,10,1]);
//4
