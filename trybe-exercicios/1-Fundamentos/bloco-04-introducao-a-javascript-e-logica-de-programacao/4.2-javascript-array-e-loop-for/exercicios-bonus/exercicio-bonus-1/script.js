//Exercício Bônus 1 - ordernar o array pelo Bubble Sort
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
/*Nesse algorítmo para fazer o Bubble Sort foram definidos dois FOR para percorrer o array numbers, mas cada um com um índice, com uma diferença de posição inicial
de 1 casa, o que permitiu, a cada passo, comparar os elementos da posição atual vs o da posição atual+1, e comparar qual é maior. Caso o da posição anterior 
(o secondIndex porque começou da posição 0) seja o maior, eles trocam de posição através do código do if da linha 6, que faz um swap entre os elementos. */

console.log(numbers);

//[ 2, 3, 5, 8, 9, 19, 27, 35, 70, 100 ]
