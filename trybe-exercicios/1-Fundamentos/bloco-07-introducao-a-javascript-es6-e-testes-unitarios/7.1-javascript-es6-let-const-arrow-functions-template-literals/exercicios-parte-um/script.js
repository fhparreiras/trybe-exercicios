// Parte 1
// Exercício 1
const testingScope = escopo => {
    if (escopo === true) {
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`);
  }

  testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const comparaNum = (a, b) => a - b;
let ordena = oddsAndEvens.sort(comparaNum); // o método sort precisa dessa função de comparação como parâmetro, para entender a ordem dos números por valor e não por string
console.log(`Os números ${ordena} se encontram ordenados de forma crescente!`);