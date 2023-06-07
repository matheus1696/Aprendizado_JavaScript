let personagem = {
    nome: "Matheus",
    idade: 26,
    nacionalidade: "Brazil",
    caracteristica: {
        altura: 1.75,
        peso: 109.2,
    },
    personalidade: {
        timidez: 89,
        agilidade: 52,
        forca: 45
    }
}

personagem.personalidade.timidez -= 25;

console.log(`O personagem ${personagem.nome} deixou de ser mais timido, passando a ter uma timidez de ${personagem.personalidade.timidez}`);