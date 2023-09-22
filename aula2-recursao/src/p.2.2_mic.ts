const exemplo_array_abs: number[] = [24, 7, -30, 8, 15, 2, 7];

function maior_recursivo(vetor: number[]): number {
    if (vetor.length <= 1) {
        return vetor[0];
    }
    if (Math.abs(vetor[0]) <= Math.abs(maior_recursivo(vetor.slice(1)))) {
        return maior_recursivo(vetor.slice(1));
    } else {
        return vetor[0]
    }

}

console.log(maior_recursivo(exemplo_array_abs));