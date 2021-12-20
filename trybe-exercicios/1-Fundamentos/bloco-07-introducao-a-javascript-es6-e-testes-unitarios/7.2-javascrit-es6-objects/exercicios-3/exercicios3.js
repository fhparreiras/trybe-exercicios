const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addEntry(obj, key, value){
  obj[key] = value;
}

addEntry(lesson2, 'turno', 'noite');

function listaChaves(obj) {
    console.log(Object.keys(obj));
}

listaChaves(lesson1);

function tamanhoObjeto(obj) {
    const listaObjeto = Object.keys(obj);
    console.log(listaObjeto.length);
}

tamanhoObjeto(lesson1);

const listaValores = (obj) => Object.values(obj); 
console.log(listaValores(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalEstudantes = (obj) => {
    let total = 0;
    for (const key in obj) {
        total += parseInt(obj[key]['numeroEstudantes']);
    }
    console.log(`O número total de estudantes em todas as aulas é : ${total}`);
}

totalEstudantes(allLessons);

function valorPosicaoChave(obj,posicao) {
  console.log(Object.values(obj)[posicao]);
}

valorPosicaoChave(lesson1, 0);

const verifyPair = (obj, chave, valor) => {
  const value = obj[chave];
  return value === valor;
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));