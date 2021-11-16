//Parte 2 - Exercício 5 - criar uma função que recebe um array de inteiros e retorne o que mais se repete.
function retornaMaior (array){
    let numbers = array;
    let maior = numbers[0];
 
 for (let i = 0; i <= numbers.length; i += 1) {
     if (maior < numbers[i+1]) {
       maior = numbers[i+1];
    }
 }
 return(numbers.indexOf(maior));
 }
 

function maisRepete(array){
    let numbers = array;
    let numberCount = 0;
    let numberPos = '';
    let maisRepete = '';
    let contagem = [];
    for (let i = 0; i < numbers.length; i += 1){
        numberPos = [i];
        numberCount = 0;
        for(let i = 0; i < numbers.length; i += 1){
            if(numbers[i] === numbers[numberPos]){
                numberCount += 1;
            }
        }
        contagem.push(numberCount);
    }
    let indice = retornaMaior(contagem);
    console.log(numbers[indice]);
    // console.log(contagem);
    // return contagem;
}

maisRepete([2, 3, 2, 5, 8, 2, 8, 3]);
//2
