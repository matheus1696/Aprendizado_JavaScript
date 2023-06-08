let n = 1

function manipular() {
    const manipular = document.querySelector('.manipular')

    //Alteração para Texto
    manipular.innerText = '<strong>Você Clicou</strong>'

    //Alteração para HTML
    manipular.innerHTML = '<strong>Você Clicou</strong>'

    //Manipulação para Adicionar Elementos
    manipular.append(' (Alterado)')

    //Manipulação para Elemento adicionando textos, dessa forma manipulamos para criação de HTML.
    function contClick() {               
        let count = document.createElement('span')
        count.innerText = ` ${n}`
        n++ 
        return count
    }

    manipular.appendChild(contClick())

    //Adiciona um Item Após a Seleção, Lembrando que caso pretenda adicionar um elemento HTML, deve fazer o estilo acima.
    manipular.after("Após o texto")

    //Adiciona um Item Antes a Seleção, Lembrando que caso pretenda adicionar um elemento HTML, deve fazer o estilo acima.
    manipular.after("Antes do texto")


}