//Exercício 6 - criar uma função que recebe o número inteiro N e retorno o somatório de todos os números de 1 até N
function somaAnterior(N){
    let number = N;
    //let valorInicial = 0;
    let valorFinal = 0;
    for(let i = 0; i <= number; i += 1){
        valorFinal = valorFinal + i;
    }
    console.log(valorFinal);
    return valorFinal;
}
somaAnterior(5);
//15
