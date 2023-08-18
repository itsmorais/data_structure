// P.1.4
export const alfabeto: string = 'abcdefghijklmnopqrstuvxz';

const compararLetrar = (letra1: string, letra2: string): void => {
    let indexLetraA = alfabeto.indexOf(letra1);
    let indexLetraB = alfabeto.indexOf(letra2);

    if (indexLetraA < indexLetraB) {
        console.log(`A letra que vem primeiro no alfabeto é: ${letra1}`);
    } else {
        console.log(`A letra que vem primeiro no alfabeto é: ${letra2}`);
    }


}

compararLetrar("a", "h");
compararLetrar("h", "a");
compararLetrar("b", "c");