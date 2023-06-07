function calcularImovel(metragem, quartos) {
    let m2 = 3000
    let valor = 0

    switch (quartos) {
        case 1:
            valor = m2 * metragem
            break;
        case 2:
            valor = m2 * 1.2 * metragem
            break;
        case 3:
            valor = m2 * 1.5 * metragem
            break;
        case 4:
            valor = m2 * 1.8 * metragem
            break;
        default:
            valor = "Informação não Cadastrada"
            break;
    }

    return valor    
}

let metragem = 54;
let quartos = 10;
let custo = calcularImovel(metragem, quartos)

if (custo != "Informação não Cadastrada") {
    console.log(`A casa custa R$${custo}`)
} else {
    console.log('Informação não Cadastrada')
}

