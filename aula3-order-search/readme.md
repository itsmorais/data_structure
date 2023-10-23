# 1 Busca em vetores

Vetor = Buscar elementos por índice
Busca sequêncial = Para elementos que não possuem indexação 
Busca binária = ?

### Busca sequêncial (Para estrutura de dado não ordenado)
 inicial posição com -1 (Retorna esse valos caso a busca não seja bem sucedida)
 itera sob o array comparando cada elemento com o elemento desejado;
 caso verdadeiro = armazenar a posição(index) e retornar a posição;

 Formas de percorrer um array:
 For
 While -> Duplica a quantidade de verificação
 Uso de sentinela -> Adiciona o elemento ao fim do array e utiliza o while para percorrer, sabendo que ele necessáriamente ira encontrar o elemento.

 ### Análise Geral

 Observar que a busca sequencial, para o pior caso, efetuará N comparações(ordem O:N)
 ex: SELECT * FROM user; para buscar todos os usuários e comparar com o usuário que desejo.
 solução: filtrar busca

 O melhor caso ocorre quando o elemento buscado está na primeira posição (Ordem O:1)

 O caso médio, a busca retorna o índice do elemento lozalizado no "meio" do vetor (Ordem : O:N)


 ### Busca binária (Vetor ordenado em ordem desc ou asc)

 A cada "rodada" de busca compara-se o elemento localizado no MEIO do vetor.
 Caso não seja encontrado, reduz o espaço de busca á metade e procede-se com uma nova "rodada"
 até acabar a quantidade de elementos

 ex:
 ```ts
    let vetor = [2,6,10,11,13,14,17,19,22,30]
 ```
    quero encontrar o elemento 22
    sabendo que o vetor está ordenado, Inicia-se com o elemento do meio
```ts
        let inicio = 0
        let meio = (inicio + vetor.lenght()) / 2
        meio = meio.floor() // meio = 4, então meio = 13
        meio = meio.floor() // meio = 4, então meio = 13
```

    comparo o valor do meio com o elemento:
    como 22 > 13 elimino todos os elementos antecessores ao 13 inclusive.

```ts
        let inicio = 5
        let meio = (inicio + vetor.lenght()) / 2
        meio = meio.floor() // meio = 7, então meio = 19
```

    comparo o valor do meio com o elemento:
    como 22 > 19 elimino todos os elementos antecessores ao 19 inclusive.
```ts
        let inicio = 8
        let meio = (inicio + vetor.lenght()) / 2
        meio = meio.floor() // meio = 8, então meio = 22
```

    comparo o valor do meio com o elemento:
    como 22 == 22 concluo minha busca.

### Análise geral
 A cada rodada de busca o tamanho do vetor é reduzido a metade, ou seja
 n, n/2, n/4, ..., n/2^k 
 Desta forma a n° de operações é proporcional a O(log2n) log de n na base 2


 ** O = Ordem espacial **

 # Busca em cadeia de caracteres
 " Algoritmos de correspondência de cadeias"

### Algoritmo trivial 
