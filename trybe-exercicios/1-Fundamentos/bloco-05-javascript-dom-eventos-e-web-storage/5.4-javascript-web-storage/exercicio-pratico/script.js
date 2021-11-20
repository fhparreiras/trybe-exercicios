document.querySelector('#main-content').style.color = localStorage.getItem('cor-texto');
document.querySelector('#main-content').style.backgroundColor = localStorage.getItem('cor-fundo');
document.querySelector('#artigo').style.fontSize = localStorage.getItem('tamanho-fonte');
document.querySelector('#main-content').style.fontFamily = localStorage.getItem('tipo-fonte');
document.querySelector('#main-content').style.lineHeight = localStorage.getItem('espacamento');

window.onload = function() {

document.querySelector('#input-cor-plano-fundo').addEventListener('change', function() {
    document.querySelector('#main-content').style.backgroundColor = document.querySelector('#input-cor-plano-fundo').value;
    console.log(document.querySelector('#input-cor-plano-fundo').value);
    localStorage.setItem('cor-fundo', document.querySelector('#input-cor-plano-fundo').value );
});


let tamanho = 16;

document.querySelector('#aMais').addEventListener('click', function() {
    tamanho += 1;
    document.querySelector('#artigo').style.fontSize = tamanho + 'px';
    localStorage.setItem('tamanho-fonte', tamanho +'px');
});

document.querySelector('#aMenos').addEventListener('click', function() {
    tamanho -= 1;
    document.querySelector('#artigo').style.fontSize = tamanho + 'px';
    localStorage.setItem('tamanho-fonte', tamanho +'px');
});


document.querySelector('#input-cor-texto').addEventListener('change', function() {
    document.querySelector('#main-content').style.color = document.querySelector('#input-cor-texto').value;
    console.log(document.querySelector('#input-cor-texto').value);
    localStorage.setItem('cor-texto', document.querySelector('#input-cor-texto').value);
});

document.querySelector('#select-fonte').addEventListener('change', function() {
    document.querySelector('#main-content').style.fontFamily = document.querySelector('#select-fonte').value;
    console.log(document.querySelector('#select-fonte').value);
    localStorage.setItem('tipo-fonte', document.querySelector('#select-fonte').value);
});

document.querySelector('#espacamento-linha').addEventListener('change', function() {
    document.querySelector('#main-content').style.lineHeight = document.querySelector('#espacamento-linha').value;
    console.log(document.querySelector('#espacamento-linha').value);
    localStorage.setItem('espacamento', document.querySelector('#espacamento-linha').value);
});

}


console.log(document.querySelector('#cor-plano-fundo').value);
