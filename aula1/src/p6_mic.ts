import { alfabeto } from "./p4_mic";

// P.1.6
const compararPalavras2 = (palavra1: string, palavra2: string): void => {
    let menorPalavra: string;
    palavra1.length > palavra2.length ? menorPalavra = palavra2 : menorPalavra = palavra1;

    for (let i = 0; i < menorPalavra.length; i++) {
        if (alfabeto.indexOf(palavra1[i]) > alfabeto.indexOf(palavra2[i])) {
            console.log(`A palavra ${palavra2} vem primeiro no dicionário se comparado a palavra ${palavra1}`)
            return
        }
        else if (alfabeto.indexOf(palavra2[i]) > alfabeto.indexOf(palavra1[i])) {
            console.log(`A palavra ${palavra1} vem primeiro no dicionário se comparado a palavra ${palavra2}`)
            return

        }

    }

}

compararPalavras2("Abacate", "Abacaxi");
compararPalavras2("Vermelho", "Verde");
compararPalavras2("Verde", "Vermelho");
