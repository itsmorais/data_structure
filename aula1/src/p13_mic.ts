class Usuario {
    nome: string;
    anoNasc: number;
    cpf: number;
    genero: string;

    constructor(nome: string, anoNasc: number, cpf: number, genero: string) {
        this.nome = nome;
        this.anoNasc = anoNasc;
        this.cpf = cpf;
        this.genero = genero;
    }

    equals(usuario2: Usuario): void {
        console.log(JSON.stringify(this) == JSON.stringify(usuario2))
    }

    speak_name(): string {
        return this.nome;
    }

}


const usuario1 = new Usuario("Michael", 1997, 46607827861, "Masculino");
const usuario2 = new Usuario("Michael", 1997, 46607827861, "Masculino");
const usuario3 = new Usuario("Fabricio", 1977, 1234545332, "Masculino");

usuario1.equals(usuario2); // TRUE
usuario1.equals(usuario3); // FALSE

console.log(usuario1.speak_name()) // Michael
console.log(usuario3.speak_name()) // Fabricio