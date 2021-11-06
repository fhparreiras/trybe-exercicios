//Exercício 10 - Calcula lucro a partir do valor e número de vendas de dois produtos
const valorCusto = 10;
const valorVenda = 20;
const vendas = 1000;
let custoTotal = (valorCusto + (valorCusto*0,2))*vendas;
let lucroTotal = ((valorVenda*vendas)-custoTotal);

if (valorCusto < 0 || valorVenda < 0){
    return console.log('Erro! Valor de custo e/ou de venda menor do que zero');
}

console.log('Lucro Total = ' +lucroTotal);

