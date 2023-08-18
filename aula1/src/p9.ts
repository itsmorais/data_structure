// P.1.9
console.log("MULTIPLOS DE 3 USANDO WHILE \n");
let contador = 3;
while (contador <= 100) {
    if (contador % 3 == 0) {
        console.log(`${contador} é múltiplo de 3!`);
        contador++;
    }
    contador++
}