const estadoSelector = document.getElementById('estado');
let estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 
'RR', 'SC', 'SP', 'SE', 'TO'];

for (let i = 0; i < estados.length; i += 1) {
    let opcaoEstado = document.createElement('option');
    opcaoEstado.innerText = estados[i];
    opcaoEstado.value = estados[i];
    estadoSelector.appendChild(opcaoEstado);
}

let data = document.getElementById('data-inicio').value;
if ((data[0] + data[1]) < 1 || (data[0] + data[1]) > 31) {
    alert("Erro! O dia deve ser maior que 0 e menor ou igual a 31");
} else if ((data[3] + data[4]) < 1 || (data[3] + data[4]) > 12) {
    alert("Erro! O mês deve ser maior que 0 e menor ou igual a 12");
} else if ((data[6] + data[7] + data[8] + data[9]) < 0) { 
    alert("Erro! O ano não pode ser negativo")
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

function criaDiv() {
    let novaDiv = document.createElement('div');
    novaDiv.id = 'novaDiv';
    novaDiv.innerText = textoOculto.innerText;
    let principal = document.querySelector('main');
    principal.prepend(novaDiv);
}

let btnEnviar = document.getElementById('envia-dados');
    btnEnviar.addEventListener('click', (event) => {
        event.preventDefault();
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
        verficaDados();
})

function verficaDados() {
    if (nome.value.length === 0) {
        alert("Nome inválido.");
    } else if (email.value.length === 0) {
        alert("E-mail inválido.");
    } else if (cpf.value.length === 0) {
        alert("CPF inválido.");
    } else if (endereco.value.length === 0) {
        alert("Endereço inválido.");
    } else if (cidade.value.length === 0) {
        alert("Cidade inválida.");
    } else if (!tipo1.checked && !tipo2.checked) {
        alert("Tipo de imóvel inválido.");
    } else if (resumo.value.length === 0) {
        alert("Resumo inválido.");
    } else if (cargo.value.length === 0) {
        alert("Cargo inválido.");
    } else if (descCargo.value.length === 0) {
        alert("Descrição do cargo inválida.");
    } else if (dataInicio.value.length === 0) {
        alert("Data inválida");
    } else {
        alert('Tudo certo com o formulário!')
        criaDiv();
    }
}

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
