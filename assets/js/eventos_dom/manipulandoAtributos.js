function atributo() {
    const input = document.querySelector('input')

    //Visualizar Atributo
    console.log( input.getAttribute('type'))
    console.log( input.getAttribute('name'))
    console.log( input.getAttribute('id'))
    console.log( input.getAttribute('placeholder'))

    //Verificando se o Atributo Existe
    if (input.hasAttribute('placeholder')) {
        console.log( input.getAttribute('placeholder'))
    }else {
        console.log('Não tem placeholder')
    }

    //Alterar Type
    input.setAttribute('placeholder', 'Placeholder Alterado')
}