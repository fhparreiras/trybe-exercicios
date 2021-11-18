// Exercício 1
function converteRomano(numRomano){
    let num = numRomano.toUpperCase();
    let arrRomano = num.split('');
    for (let i = 0; i < arrRomano.length; i += 1) {
        let pos = arrRomano[i];
        switch(pos){
            case 'I':
            arrRomano[i] = 1;
            break; 
            case 'V':
            arrRomano[i] = 5;
            break; 
            case 'X':
            arrRomano[i] = 10;
            break; 
            case 'L':
            arrRomano[i] = 50;
            break; 
            case 'C':
            arrRomano[i] = 100;
            break; 
            case 'D':
            arrRomano[i] = 500;
            break;
            case 'M':
            arrRomano[i] = 1000;
            break;  
        }
    }
    console.log(arrRomano);
    let resultado = arrRomano[arrRomano.length - 1];
    if (arrRomano.lenght == 1) {
        resultado = arrRomano[0];
    }
    for (let c = 0; c < arrRomano.length - 1; c += 1) {
        if (arrRomano[c] >= arrRomano[c + 1]) {
            resultado += arrRomano[c];
        } else {
            arrRomano[c] *= -1 
            resultado += arrRomano[c];
        }
    }
    console.log(arrRomano);
    console.log(resultado);
    return resultado;
}
converteRomano('xvi');

