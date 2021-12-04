// Parte dois - Exercício 4
let skills = ['javascript', 'git', 'github', 'html', 'css'];

const criaFrase = (palavra) => {
    let x = palavra;
    const frase = `Tryber ${x} aqui!`;
    return frase;
}
;

function novaFrase(criaFrase) {
    let sortSkills = skills.sort();
    console.log(`${criaFrase} Minhas cinco principais habilidades são:` );
    for (let i = 0; i < sortSkills.length; i += 1) {
      i !== sortSkills.length - 1 ? console.log(`.${sortSkills[i]};`) : console.log(`.${sortSkills[i]}; #goTrybe`);
    }
}

novaFrase(criaFrase('Fellipe'));

