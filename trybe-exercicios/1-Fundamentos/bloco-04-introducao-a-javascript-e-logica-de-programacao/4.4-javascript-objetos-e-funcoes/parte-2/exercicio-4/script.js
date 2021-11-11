//Parte 2 - Exercício 4 - retorna o nome com a maior quantidade de caracteres em um dado array
function maiorNome(array){
let nomes = array;
let maior = nomes[0].split('');
let splitNome = '';
for (let i = 0; i < nomes.length; i += 1){
    splitNome = nomes[i].split('');
    //console.log(splitNome);
    if (splitNome.length > maior.length){
        maior = nomes[i].split('');
    }
}
console.log(maior.join(''));
}
maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
//Fernanda


