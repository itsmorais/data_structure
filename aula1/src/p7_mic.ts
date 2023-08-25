import promptSync from 'prompt-sync';

// P.1.7
const input = promptSync()
console.log("======================    MENU    ======================)");
console.log("Escolha uma das alternativas:");
console.log("1. Duvidas\n2. Reclamações\n3.Sair");
const resposta = input("");

switch (resposta) {
    case '1':
        console.log("Suas dúvidas devem ser encaminhadas para o email duvidas@email.com");
        break;
    case '2':
        console.log("Não aceitamos reclamações! ")
        break
    case '3':
        console.log("Programa finalizado!")
        break

    default:
        console.log("Valor incorreto! encerrando programa...");
        break
}
