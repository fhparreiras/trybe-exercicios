//Exercício 6 - fazer um programa que diz se o número em uma variável é primo ou não
let number = 4;
let print = '';

if (number === 2){
    return(console.log(number + ' é um número primo.'));
} else if (number === 1){
    return(console.log(number + ' não é um número primo.'))
} else if (number <= 0) {
    return(console.log('A verificação contempla apenas números positivos, começando do número 1.'))
}

for (let i = 2; i < number; i +=1){
    if ((number % i === 0)) {
        return(console.log(number + ' não é um número primo.'));
    } else {
        print = ' é um número primo.'
    }
}

console.log(number + print);
