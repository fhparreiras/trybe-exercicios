function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Exercício 1

  function criaDatas(dezDaysList){
  for (dia of dezDaysList) {
    let data = document.createElement('li');
    data.className = 'day';
    data.innerHTML = dia;
    if (dia == '24' || dia == '31') {
      data.classList.add('holiday');
    } else if (dia == '4' || dia == '11' || dia == '18') {
      data.classList.add('friday');
    } else if (dia == '25') {
      data.classList.add('friday', 'holiday');
    }
    document.querySelector('#days').appendChild(data);
  }
}
criaDatas([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

// Exercício 2

function addFeriado(Feriados){
  let buttonFeriado = document.createElement('button');
  buttonFeriado.id = 'btn-holiday';
  buttonFeriado.name = Feriados;
  buttonFeriado.innerText = Feriados;
  document.querySelector('.buttons-container').appendChild(buttonFeriado);
}

addFeriado('Feriados');

// Exercício 3

function addEvento(){
  document.getElementById('btn-holiday').addEventListener('click', function(){ 
    for (dia of document.querySelectorAll('li')) {
      if (dia.className.includes('holiday')) {
        dia.style.backgroundColor = '#0984e3';
        dia.style.color = 'white';
        dia.style.borderRadius = '50px';
      }
    }
    count += 1;
    if (count == 2) {
      for (dia of document.querySelectorAll('li')) {
        if (dia.className.includes('holiday')) {
          dia.style.backgroundColor = 'rgb(238,238,238)';
          dia.style.color = 'rgb(119, 119, 119)';
          count = 0;
        }
      }
    }
    console.log(count);
  });
}

let count = 0;

addEvento();

// Exercício 4

function addFriday(buttonName){
  let buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.name = buttonName;
  buttonFriday.innerText = buttonName;
  document.querySelector('.buttons-container').appendChild(buttonFriday);
}

addFriday('Sexta-Feira');

// Exercício 5

let countFriday = 0;
let fridayList = [];

function addEventoFriday(){
  document.getElementById('btn-friday').addEventListener('click', function(){ 
    let texto = "MUFASA FRIDAY!";
    
    for (dia of document.querySelectorAll('li')) {
      if (dia.className.includes('friday') && dia.innerText !== texto) {
        fridayList.push(dia.innerText); 
        dia.innerText = texto;
        dia.style.backgroundColor = '#00b894';
        dia.style.color = 'white';
        dia.style.borderRadius = '50px';
      }
    }
    countFriday += 1;
    if (countFriday == 2) {
      let pos = 0;
      for (dia of document.querySelectorAll('li')) {
        if (dia.className.includes('friday')) {
          dia.style.backgroundColor = 'rgb(238,238,238)';
          dia.style.color = 'rgb(119, 119, 119)';
          dia.innerText = fridayList[pos];
          pos += 1;
          }
        }
        countFriday = 0;
        fridayList = [];
    }  
  });
}
addEventoFriday();

// Exercício 6

function zoomIn(){
  document.querySelector('#days').addEventListener('mouseover', function(evento) {
  evento.target.style.fontSize = '30px';
  evento.target.style.cursor = 'default'; 
});
}

function zoomOut(evento){
  document.querySelector('#days').addEventListener('mouseout', function(evento) {
  evento.target.style.fontSize = '20px'; 
  });
}
zoomIn();
zoomOut();

// Exercício 7

function addTarefa(tarefa, cor){
  let task = document.createElement('span');
  task.innerHTML = tarefa;
  document.querySelector('.my-tasks').appendChild(task);
  addLegenda (cor);
}
addTarefa('aula ao vivo', 'red');
addTarefa('teste', 'green');
addTarefa('cozinhar', 'blue');

// Exercício 8

function addLegenda (cor){
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  let espaco = document.createElement('br');
  document.querySelector('.my-tasks').appendChild(div);
  document.querySelector('.my-tasks').appendChild(espaco);
}


// Exercício 9
let countLegenda = 0;

function selectTask(){
  let divTask = document.querySelector('.my-tasks');
  let divList = document.querySelectorAll('.task');
  divTask.addEventListener('click', function(evento) {
    
      if (evento.target.className === 'task' && countLegenda < 1) {
      evento.target.classList.add('selected');
      evento.target.previousElementSibling.style.color = 'black';
      countLegenda += 1;
      } else if (evento.target.className === 'task selected') {
        evento.target.className = 'task';
        evento.target.previousElementSibling.style.color = 'rgb(119, 119, 119)';
        countLegenda -= 1;
      }
  })
}
selectTask();

// Exercício 10

function corDia(){
  document.querySelector('#days').addEventListener('click', function(evento) {
    if (document.querySelector('.selected') === null ) {
      evento.target.style.color = 'rgb(119,119,119)';
    } else if (evento.target.style.color === document.querySelector('.selected').style.backgroundColor){
      evento.target.style.color = 'rgb(119,119,119)'; 
    } else {
      evento.target.style.color = document.querySelector('.selected').style.backgroundColor; 
    }
  });
}
corDia();

// Exercício Bônus

function addCompromisso(){
  document.querySelector('#btn-add').addEventListener('click', function() {
    let print = '';
    for (let i = 1; i < 99; i +=1) {
      if (document.querySelector('#task-input').value == print) {
        alert('ERRO! Nenhum caractere foi inserido.')
        break;
      }
      print += ' '
    }
    let inputCompromisso = document.createElement('li');
    inputCompromisso.innerText = document.querySelector('#task-input').value;
    document.querySelector('.task-list').appendChild(inputCompromisso);
    document.querySelector('#task-input').value = '';

  });

  document.querySelector('#task-input').addEventListener('keypress', function(evento) {
    let print = '';
    for (let i = 1; i < 99; i +=1) { 
      if (evento.which == 13 && document.querySelector('#task-input').value == print) {
        alert('ERRO! Nenhum caractere foi inserido.')
        break;
      }
      print += ' '
    }
    if (evento.which == 13 && document.querySelector('#task-input').value !== print) {
      let inputCompromisso = document.createElement('li');
      inputCompromisso.innerText = document.querySelector('#task-input').value;
      document.querySelector('.task-list').appendChild(inputCompromisso);
      document.querySelector('#task-input').value = '';
    }
  });
}

addCompromisso();