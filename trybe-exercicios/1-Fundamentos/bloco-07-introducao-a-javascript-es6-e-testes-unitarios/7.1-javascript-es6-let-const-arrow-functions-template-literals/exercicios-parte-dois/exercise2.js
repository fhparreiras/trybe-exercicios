// Parte 2 - Exercício 2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = frase => {
    const newArr = frase.split(' ');
    let maior = '';
    for (let i = 0; i < newArr.length; i += 1) {
        newArr[i].length > maior.length ? maior = newArr[i] : maior = maior;
    }
    return console.log(maior);
}

maiorPalavra('A frase maiorDeTodas é esta');
