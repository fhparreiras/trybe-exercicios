//Parte 2 - Exercício 1 - função que verifica se a string é um palíndromo

function verificaPalindrome(palavra){
    let resultado = true;
    let palavra2 = palavra.split('');
    palavra2 = palavra2.reverse();
    palavra2 = palavra2.join('');

    if (typeof palavra !== "string" || palavra == '' || palavra.split('').length < 3) {
        console.log("O input precisa ser uma string");
        resultado = false;
        
    } else if (palavra === palavra2) {
        resultado = true;
    } else {
        resultado = false;
    }
    console.log('É um palíndromo?',resultado);
}

verificaPalindrome('arara');

