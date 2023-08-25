// P.1.5
const compararPalavras = (palavra1: string, palavra2: string): void => {
    let menorPalavra: string;
    palavra1.length > palavra2.length ? menorPalavra = palavra2 : menorPalavra = palavra1;

    for (let i = 0; i < menorPalavra.length; i++) {
        if (palavra1.charCodeAt(i) > palavra2.charCodeAt(i)) {
            console.log(`A palavra ${palavra2} vem primeiro no dicionário se comparado a palavra ${palavra1}`)
            return
        }
        else if (palavra1.charCodeAt(i) < palavra2.charCodeAt(i)) {
            console.log(`A palavra ${palavra1} vem primeiro no dicionário se comparado a palavra ${palavra2}`)
            return

        }

    }

}

compararPalavras("Abacate", "Abacaxi");
compararPalavras("Vermelho", "Verde");
compararPalavras("Verde", "Vermelho");