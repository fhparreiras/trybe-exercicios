//Exercício 5 - 

const n = 7;
let base = n; //a base tem quer ser ímpar, pois partindo do topo do triângulo que é 1, a linha de baixo será sempre a anterior + 2
let meio = (base + 1) / 2; //aqui encontramos a posição central do triângulo onde teremos o primeiro asterisco, e que coincidirá com o número de linhas também
let posEsquerda = meio; //verificação do lado esquerdo até o ponto central
let posDireita = meio; //verificação do ponto central até o lado direito
let asterisco = '*';


for (let iLinha = 1; iLinha <= meio; iLinha += 1) { //aqui percorremos cada linha, do total de (base + 1) / 2
    let print = ''; //inicialmente o valor printado está em " "
    for (let iColuna = 1; iColuna <= base; iColuna += 1) { //a cada linha percorrida, percorremos todas as colunas
        if (iColuna === posEsquerda || iColuna === posDireita || iLinha === meio) { //se a coluna atual for = esquerda ou direita ou se a linha for a última, printa asterisco
            print += asterisco; // ou seja, no primeiro round, todas as posições estarão no meio, então lá será printado o primeiro asterisco, o do topo do triângulo
        } else {
            print += ' '; //no restante das posições, printar vazio
        }
    }
    posEsquerda -= 1; //após percorrer todas as colunas da rodada, diminui 1 da posição da esquerda, o que fará a igualdade do lado esquerdo ser disparada uma casa antes e printar asterisco
    posDireita += 1; //o mesmo para o lado direito, mas uma casa mais tarde, pois aumentamos a posição em 1
    //quando chegar na última linha, vai disparar o || iLinha === meio, e todas as colunas serão printadas de asterisco
    console.log(print);
}
