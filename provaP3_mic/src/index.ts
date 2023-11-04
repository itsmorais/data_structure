import * as fs from 'fs';
import { Merge } from '../merge_sort';
const merge_sort = new Merge

// Ler arquivo
const readFile = fs.readFileSync('./input_txt.txt', { encoding: 'utf8' })


// Armazena arquivo em array - separando cada palavra como um elemento do array
const stringFile = readFile.split(' ')



// MERGE SORT NO ARRAY
console.log("================= MERGE SORT =================")
function sort_Array() {
    const sorted_array = [merge_sort.sort(stringFile),'\n']
    
    fs.writeFileSync('./michael_ord.txt', JSON.stringify(sorted_array.toString()));

}

sort_Array()











