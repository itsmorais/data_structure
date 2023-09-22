const exemplo_array: number[] = [24, 7, 9, 8, 15, 2, 7];


function menor_recursivo(vetor: number[]): number {

    if (vetor.length <= 1) {
        return vetor[0]
    }

    if (vetor[0] >= menor_recursivo(vetor.slice(1))) {
        return menor_recursivo(vetor.slice(1))
    }
    else {
        return vetor[0];
    }




}

console.log(menor_recursivo(exemplo_array));