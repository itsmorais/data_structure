class Fatorial {
    cache: any;
    constructor() {
        this.cache = {};
    }

    fatorial(n: number): number {
        if (n == 1)
            return n;
        else
            return n * this.fatorial(n - 1);
    }

    fatorial_cache(n: number): number {
        if (this.cache[n] != undefined) {
            return this.cache[n];

        } else {
            if (n == 1) {
                this.cache[n] = n;
                return n;
            }
            else {
                this.cache[n] = n * this.fatorial(n - 1);
                return this.cache[n];
            }

        }

    }

}

let fatorial = 20
let fat = new Fatorial();

console.log(`Fatorial do valor ${fatorial} forma recursiva`,fat.fatorial(fatorial));
console.log(`Fatorial do valor ${fatorial} forma recursiva com Cache`,fat.fatorial_cache(fatorial));
console.log("Avaliando o desempenho: ")
let instante_inicial: number = Date.now();
for (let i: number = 1; i < 100000000; ++i) {
    //fat.fatorial(fatorial);
    fat.fatorial_cache(fatorial);
}
let instante_final: number = Date.now();
console.log("Tempo decorrido: ", (instante_final - instante_inicial) / 1000);