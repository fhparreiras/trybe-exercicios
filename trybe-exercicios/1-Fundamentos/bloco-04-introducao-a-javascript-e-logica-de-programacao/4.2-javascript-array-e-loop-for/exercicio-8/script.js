//Exercício 8 - Criar um array que vai de 1 a 25 utilizando o FOR e imprimir o resultado;

let numbers = [];

for (let index = 0; index < 25; index +=1) {
    numbers.push(index+1);
    console.log(numbers[index]);
}
