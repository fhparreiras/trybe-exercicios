//Parte 2 - Exercício 7 - criar uma função que recebe duas strings, e verifica se a string b é menor que a string a, e corresponde ao final da string a.
function verificaFimPalavra(word,ending){
    let a = word.split('');
    let b = ending.split('');
    let c = [];
    //primeira condição
    if (b.length >= a.length){
        console.log('A string word precisa ser maior que a string ending!');
        return false;
    }
    //segunda condição
    for (let i = a.length - b.length; i < a.length; i += 1){
        c.push(a[i]);
    }
    c = c.join('');
    b = b.join('');
    if (c === b) {
        console.log('Ok, a string ending corresponde ao final da string word.');
        return true;
    } else {
        console.log('A string ending não corresponde ao final da string word.')
        return false;
    }
}

verificaFimPalavra('Trybe', 'be');