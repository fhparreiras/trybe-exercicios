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
        dia.style.backgroundColor = 'red';
      }
    }
    count += 1;
    if (count == 2) {
      for (dia of document.querySelectorAll('li')) {
        if (dia.className.includes('holiday')) {
          dia.style.backgroundColor = 'rgb(238,238,238)';
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

function addEventoFriday(){
  document.getElementById('btn-friday').addEventListener('click', function(){ 
    for (dia of document.querySelectorAll('li')) {
      if (dia.className.includes('friday')) {
        dia.innerText = 'Sextou! MUFASA DAY';
      }
    }
    countFriday += 1;
    if (countFriday == 2) {
      for (dia of document.querySelectorAll('li')) {
        if (dia.className.includes('friday')) {
          dia.style.backgroundColor = 'red';
          countFriday = 0;
        }
      }
    }
    console.log(countFriday);
  });
}

addEventoFriday();
