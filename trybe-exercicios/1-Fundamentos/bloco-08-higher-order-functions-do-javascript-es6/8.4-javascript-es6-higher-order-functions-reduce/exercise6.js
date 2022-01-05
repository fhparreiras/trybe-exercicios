const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto 
//terá o formato { name: nome do aluno, average: media das notas } .

function somaNotas(acum, atual) {
  return acum + atual;
}

function studentAverage() {
    // escreva seu código aqui
    return students.reduce((acum, atual, index) => {
      const objeto = {
          name: atual,
          average: grades[index].reduce(somaNotas, 0) / grades[index].length,
      };

      acum.push(objeto);
      return acum;
    }, []);
};

console.log(studentAverage());