//Parte 1 - Exercício 7
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editor: 'Rocco',});
console.log(leitor);

// { nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos:
//    [ { titulo: 'O Pior Dia de Todos',
//        autor: 'Daniela Kopsch',
//        editora: 'Tordesilhas' },
//      { titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//        autor: 'JK Rowling',
//        editor: 'Rocco' } ] }
