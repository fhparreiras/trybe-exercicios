//Exercício bônus 5
let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

 for (let key in moradores['blocoUm']) {
        console.log('Morador do bloco um: ' + moradores['blocoUm'][key]['nome'] + ' ' + moradores['blocoUm'][key]['sobrenome']);
 } 

// Morador do bloco um: Luiza Guimarães
// Morador do bloco um: William Albuquerque