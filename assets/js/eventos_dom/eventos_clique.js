function clicou() {
    console.log('Clicou no botão')
}

//Selecionando o elemento e adicionando o evento
let botao = document.querySelector('.clicou')
botao.addEventListener('click',function clicou() {
    console.log('Clicou no botão')
})