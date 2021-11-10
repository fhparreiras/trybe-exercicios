//Parte 1 - Exercício 6
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
console.log('O livro favorito de',leitor.nome,leitor.sobrenome,'se chama',"'" + leitor.livrosFavoritos[0].titulo + "'"+'.');

//O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'.