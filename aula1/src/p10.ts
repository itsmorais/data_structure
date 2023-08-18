// P.1.10
console.log("MULTIPLOS DE 3 USANDO DO-WHILE \n");
let contador2 = 3;

do {
    if (contador2 % 3 == 0) {
        console.log(`${contador2} é múltiplo de 3!`);
        contador2++;
    }
    contador2++;
} while (contador2 <= 100);
