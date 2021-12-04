// Parte 2 - Exercício 1 Crie uma função que receba um número e retorne seu fatorial.

const fatorial = num => {
    let resultado = 1;
    for (let i = num; i >= 1; i -= 1) {
        resultado *= i;
    }
    console.log(resultado);
    return resultado;
}

fatorial(4);