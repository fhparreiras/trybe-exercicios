// Parte 2 - Exercício 3 - 
let count = 0;
const btn = document.querySelector('#btnCount');
const counter = document.querySelector('#contador');
btn.addEventListener('click', () => {
    count += 1;
    counter.innerHTML = count;
});



