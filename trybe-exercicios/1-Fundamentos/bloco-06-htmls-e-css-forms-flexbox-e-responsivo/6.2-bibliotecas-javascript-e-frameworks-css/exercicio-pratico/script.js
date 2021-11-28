const estadoSelector = document.getElementById('estado');
let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 
'RR', 'SC', 'SP', 'SE', 'TO'];


for (let i = 0; i < estados.length; i += 1) {
    let opcaoEstado = document.createElement('option');
    opcaoEstado.innerText = estados[i];
    opcaoEstado.value = estados[i];
    estadoSelector.appendChild(opcaoEstado);
}

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let endereco = document.getElementById('endereco');
let cidade = document.getElementById('cidade');
let tipo = document.querySelector('[name=tipo]')
let tipo1 = document.getElementById('tipo-1');
let tipo2 = document.getElementById('tipo-2');
let estado = document.getElementById('estado');
let resumo = document.getElementById('resumo');
let cargo = document.getElementById('cargo');
let descCargo = document.getElementById('desc-cargo');
let dataInicio = document.getElementById('data-inicio');
let textoOculto = document.getElementById('oculto');

dataInicio.DatePickerX.init({format: 'dd-mm-yyyy'});

function criaDiv() {
    let novaDiv = document.createElement('div');
    novaDiv.id = 'novaDiv';
    novaDiv.innerText = textoOculto.innerText;
    let principal = document.querySelector('main');
    principal.prepend(novaDiv);
}

let btnEnviar = document.getElementById('envia-dados');
    btnEnviar.addEventListener('click', (event) => {
        //event.preventDefault();
        if (document.querySelector('#novaDiv') !== null) {
        document.querySelector('#novaDiv').remove();
        }
        document.getElementById('resultado-nome').innerText = 'Nome: ' + nome.value;
        document.getElementById('resultado-email').innerText = 'E-mail: ' + email.value;
        document.getElementById('resultado-cpf').innerText = 'CPF: ' + cpf.value;
        document.getElementById('resultado-endereco').innerText = 'Endereço: ' + endereco.value;
        document.getElementById('resultado-cidade').innerText = 'Cidade: ' + cidade.value;
        document.getElementById('resultado-estado').innerText = 'Estado: ' + estado.value;
        document.getElementById('resultado-tipo').innerText = 'Tipo de Imóvel: ' + tipo.value;
        document.getElementById('resultado-resumo').innerText = 'Resumo: ' + resumo.value;
        document.getElementById('resultado-cargo').innerText = 'Cargo: ' + nome.value;
        document.getElementById('resultado-desc-cargo').innerText = 'Descrição do cargo: ' + descCargo.value;
        document.getElementById('resultado-data').innerText = 'Data de início: ' + dataInicio.value;
        //criaDiv();
})


let btnLimpar = document.getElementById('limpa-tudo');
    btnLimpar.addEventListener('click', (event) => {
        if (document.querySelector('#novaDiv') !== null) {
        document.querySelector('#novaDiv').remove();
        }
        nome.value = '';
        email.value = '';
        endereco.value = '';
        cidade.value = '';
        estado.value = '';
        cpf.value = '';
        tipo1.checked = false;
        tipo2.checked = false;
        resumo.value = '';
        nome.value = '';
        descCargo.value = '';
        dataInicio.value = '';
})
