import * as fs from 'fs';
import { Merge } from '../merge_sort';

// importando funções fornecidas pelo professor
const merge_sort = new Merge

// Ler arquivo
const readFile = fs.readFileSync('./input2.txt', { encoding: 'utf8' })


// Armazena arquivo em array - separando cada palavra como um elemento do array
const stringFile = readFile.split(' ')


// Output do stringFile = array com palavras
console.log("============ ARRAY COM DADOS DO ARQUIVO DE TEXTO! ============")
console.log(stringFile)
console.log("Quantidade de paralvras presentes no arquivo de entrada:", stringFile.length)




// MERGE SORT NO ARRAY
console.log("================= MERGE SORT =================")

function sort_Array() {
    const sorted_array = [merge_sort.sort(stringFile)]
    console.log(sorted_array[0])
    console.log("Quantidade de palavras presentes no arquivo de saída:", sorted_array[0].length)
    // .join para transformar o array em uma string única usando o espaço como 'separador'
    fs.writeFileSync('./michael_ord.txt', sorted_array[0].join(' '));

}

sort_Array()











