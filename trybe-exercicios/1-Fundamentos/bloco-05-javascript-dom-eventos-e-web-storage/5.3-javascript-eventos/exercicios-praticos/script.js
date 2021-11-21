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
    if (dia == '24' || dia == '25' || dia == '31') {
      data.classList.add('holiday');
    } else if (dia == '4' || dia == '11' || dia == '18' || dia == '25') {
      data.classList.add('friday');
    }
    document.querySelector('#days').appendChild(data);
  }
}
criaDatas([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

