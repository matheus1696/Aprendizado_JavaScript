function calcular(inteiro, porcentagem) {
    calculo = (inteiro * porcentagem) / 100

    return calculo
}

let inteiro = 40
let porcentagem = 25

console.log("O valor de " + porcentagem +  "%" + " de " + inteiro + " é " + calcular(inteiro,porcentagem))