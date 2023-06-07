let pessoa = {
    nome: "Matheus",
    sobrenome: "Mota",
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());


