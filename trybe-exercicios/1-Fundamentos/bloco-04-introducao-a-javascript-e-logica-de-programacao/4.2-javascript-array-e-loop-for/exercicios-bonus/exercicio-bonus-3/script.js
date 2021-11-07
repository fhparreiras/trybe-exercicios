/*Exercício Bônus 3 - criar um novo array a partir do array numbers, sem perder o array atual. E os valores do novo array devem ser o valor do elemento do array antigo
multiplicado pelo elemento da posição seguinte, e , no caso do último elemento do array, multiplicado por 2. Devemos utilizar o FOR e o PUSH. */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];

for (let i = 0; i < numbers.length; i +=1){
    if (i !== numbers.length-1) {
        newNumbers.push(numbers[i]*numbers[i+1]);
    } else {
        newNumbers.push(numbers[i]*2);
    }
}

console.log(newNumbers);

//[ 45, 27, 57, 1330, 560, 800, 200, 70, 945, 54 ]