window.onload = function() {

document.querySelector('#input-cor-plano-fundo').addEventListener('change', function() {
    document.querySelector('#main-content').style.backgroundColor = document.querySelector('#input-cor-plano-fundo').value;
    console.log(document.querySelector('#input-cor-plano-fundo').value);
});



let tamanho = 16;
document.querySelector('#aMais').addEventListener('click', function() {
    tamanho += 1;
    document.querySelector('#artigo').style.fontSize = tamanho + 'px';
});

document.querySelector('#aMenos').addEventListener('click', function() {
    tamanho -= 1;
    document.querySelector('#artigo').style.fontSize = tamanho + 'px';
});


document.querySelector('#input-cor-texto').addEventListener('change', function() {
    document.querySelector('#main-content').style.color = document.querySelector('#input-cor-texto').value;
});

}

console.log(document.querySelector('#cor-plano-fundo').value);