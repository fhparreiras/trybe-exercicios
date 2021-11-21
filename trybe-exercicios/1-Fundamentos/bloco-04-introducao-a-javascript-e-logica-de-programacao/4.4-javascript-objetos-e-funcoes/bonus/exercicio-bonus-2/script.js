//Exercício bônus 2
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
    let newArray = [];
    for (let i = 0; i < vector.length; i += 1) {
        for (let c = 0; c < vector[i].length; c += 1) {
            if (vector[i][c] % 2 === 0) {
                newArray.push(vector[i][c]);
            }
        }
    }
    console.log(newArray);
    return newArray;
    //fazer um for para acessar cada array do vetor
    //fazer um for dentro do for para detectar os números pares e dar push para newArray
    // console.log(newArray) e return newArray
}

arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]);

// [ 2, 4, 6, 8, 10 ]
