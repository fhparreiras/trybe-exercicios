//Exercício Bônus 2 - ordernar o array em ordem decrescente pelo Bubble Sort
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);

//[ 100, 70, 35, 27, 19, 9, 8, 5, 3, 2 ]