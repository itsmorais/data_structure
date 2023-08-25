// P.1.11


const compararNumerosSwitch = (n1: number, n2: number): void => {
    switch (n1 <= n2) {
        case true:
            console.log(`${n1} é menor ou igual a ${n2}`);
            break;
        case false:
            console.log(`${n1} é maior que ${n2}`);
    }
}


const compararNumerosIfElse = (n1: number, n2: number) => {
    if (n1 > n2) {
        console.log(`${n1} é maior que ${n2}`);
    } else if (n1 == n2) {
        console.log(`${n1} é igual a ${n2}`);
    } else {
        console.log(`${n1} é menor que ${n2}`);

    }


}
console.log("\nUSANDO SWITCH\n")
compararNumerosSwitch(3, 7);
compararNumerosSwitch(4, 4);
compararNumerosSwitch(8, 3);

console.log("\nUSANDO IF-ELSE\n")
compararNumerosIfElse(3, 7);
compararNumerosIfElse(4, 4);
compararNumerosIfElse(8, 3);

export default compararNumerosIfElse;