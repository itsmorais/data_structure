import promptSync from 'prompt-sync';

let input = promptSync();

// P.1.3
const maiorNumero = (a: number, b: number): number => (a > b) ? a : b;

let primeiroValor = input("Insira o primeiro valor: ");
let segundoValor = input("Insira o segundo valor: ")

const primeiroNumero = parseFloat(primeiroValor);
const segundoNumero = parseFloat(segundoValor);

console.log("O maior número é:", maiorNumero(primeiroNumero, segundoNumero));
