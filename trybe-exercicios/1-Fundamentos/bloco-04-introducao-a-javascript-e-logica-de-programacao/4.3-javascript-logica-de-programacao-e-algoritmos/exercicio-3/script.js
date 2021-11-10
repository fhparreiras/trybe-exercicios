//Exercício 3 - Inverta o triângulo do exercício anterior.

let n = 5;
let asterisco = '*';
let print = '';
let pos = n;

for (let iLinha = 0; iLinha < n; iLinha += 1){
    for (let iColuna = 1; iColuna <= n; iColuna +=1){
        if (iColuna < pos){
            print = print + ' ';
        } else {
            print = print + asterisco;
        }
    }
    console.log(print);
    print = '';
    pos -= 1;
}


/*
O que eu quero? que sejam feitos 5 prints, cada um com um número crescente de asteriscos e ao mesmo tempo decrescentes de espaços em brancos.
- Primeiro declaramos a variável que recebe o número de repetições, que no exercício foi 5. 
- Depois declaramos uma variável que recebe o símbolo do asterisco.
- Declaramos a variável "print" que vai receber o valor final a ser printado, inicialmente vazia.
- Declaramos a variável "pos" que vai acessar e comparar a posição de contagem para fazer a lógica se o elemento da coluna será asterisco ou espaço em branco.
- Na linha 8 começamos com o primeiro FOR, o "for externo", que vai percorrer cada linha. (índice iLinha)
- Na linha 9 iniciamos um for dentro do for, para que a cada linha percorrida, sejam percorridas as 5 colunas. (índice iColuna: no caso começamos o índice 
número 1 para que a contagem possa chegar até 5 e poder funcionar a lógica na linha abaixo)
- Na linha 10 adicionamos uma condição a ser verificada a cada coluna do iColuna. Se o número da posição da coluna iColuna for menor que o da variável "pos"
a variável "print" se atualiza para o valor dela nesse momento adicionado de um espaço ' '. Como a variável "pos" inicialmente é 5, nesse primeiro round do
FOR das colunas, a última iColuna será = 5 e 5 não é menor que 5(pos atual), então passará para a condição da linha 12 e 13, e a variável print receberá um
asterisco ao invés do espaço.
- Na linha 16 será dado o console log da primeira rodada do FOR externo;
- A linha 17 retorna o print para vazio, para poder receber o resultado novo, da próxima rodada do FOR externo;
- A linha 18 agora atualiza a variável "pos" para um valor a menos, antes da próxima rodada do FOR externo: isso vai fazer com que a condição de se inputar
um asterisco seja antecipada em uma casa.
- O processo vai se repetir até as 5 linhas do FOR externo serem acessadas.
*/
