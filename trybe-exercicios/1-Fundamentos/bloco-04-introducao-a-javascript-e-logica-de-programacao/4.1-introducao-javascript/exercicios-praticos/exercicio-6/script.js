//Exercício 6 - Retorna os movimentos de peças de xadrez (não é case sensitive)

let peca = "rainha";

peca = peca.toLowerCase();

console.log(peca.toUpperCase());

switch (peca){
    case "peao":
    case "peão":
        console.log("Movimento para frente ou para trás - uma casa");
        break;
    case "torre":
        console.log("Movimento para frente, para trás ou para os lados - sem restrição de número de casas");
        break;
    case "rei":
        console.log("Movimento para frente, para trás, para os lados, diagonal - uma casa");
        break;
    case "rainha":
        console.log("Movimento em qualquer sentido - sem restrição de número de casas");
        break;
    case "bispo":
        console.log("Movimento na diagonal - sem restrição de número de casas");
        break;
    case "cavalo":
        console.log("Movimento em L - duas casas numa direção e uma casa para a direita ou esquerda dessa direção");
        break;
    default:
        console.log("Essa peça não existe");
        break;
}