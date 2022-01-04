// Exercício 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem 
//a letra 'a' maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(acum, atual) {
    return acum + atual;
  }

  const letrasA = names.reduce(containsA, []).split('');
  
//   const contagemLetrasA = () => {
//     let count = 0;
//     for (let i = 0; i < letrasA.length; i += 1) {
//       if (letrasA[i] === 'a' || letrasA[i] === 'A') {
//         count += 1;
//       }
//     }
//     console.log(count);
//   };
// contagemLetrasA();

const contagemLetrasA = letrasA.reduce((acum, atual) => {
    if (atual === 'a' || atual === 'A') {
        return acum + 1;
    }
    return acum;
}, 0);

console.log(contagemLetrasA);