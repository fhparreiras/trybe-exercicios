//Exercício 1 - Dado um valor n > 1, imprimir na tela um quadrado feito de asteriscos de lado n.

let n = 5;
let print = '';
if ( n <= 1){
        console.log('O valor de n precisa ser maior que 1.');
} else if (n > 1) {
    for (let i = 1; i <= n; i +=1){
        print = '';
        for (let i = 1; i <= n; i +=1){
            print = print + "*";  
        }
        console.log(print);
    }
}    

/*
*****
*****
*****
*****
*****
*/
