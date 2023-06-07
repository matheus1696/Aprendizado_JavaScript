function acesso(usuario, senha) {

    let isAccess = (usuario == "pedro" && senha == "123") ? "Acesso Concedido" : "Acesso Negado"

    return isAccess
}

let usuario = "Pedro"
let senha = "123"
console.log(acesso(usuario, senha))