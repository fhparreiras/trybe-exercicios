//Parte 1 - Exercício 8
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
      { 
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco' }
    ],
  };

  console.log(leitor.nome,'tem',leitor.livrosFavoritos.length,'livros favoritos.');
  //Julia tem 2 livros favoritos.
