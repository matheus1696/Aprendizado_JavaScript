let verduras = ['Cebola', 'Cenoura', 'Pimentão', 'Repolho']

//Listagem do Array
console.log(verduras);

//Contagem do Array
console.log(verduras.length);

//Adicionar Item Novo
verduras.push('Pepino')

//Remover Último
verduras.pop()

//Remover Primeiro
verduras.shift()

//Junta Todos os Itens do Array
console.lot(verduras.join(' '))

//Ordenando Array Alfabeticamente A->Z
verduras.sort()

//Ordenando Array Alfabeticamente Z->A
verduras.sort()
verduras.reverse()

//Filtros de Array
let filter = verduras.filter((value)=>{
    if(value.length > 4){
        return true
    }
})

//Verificação de Todos os Items
verduras.every((value) => {
    if(value.length > 3){
        console.log('Todos são maiores que 3')
    }else {        
        console.log('Todos são menores que 3')
    }
})

//Verificação de Alguns Items
verduras.some((value) => {
    if(value.length > 3){
        console.log('Algum item é maior que 3')
    }else {        
        console.log('Algum item é menor que 3')
    }
})

//Verificando se existe o item

if(verduras.includes('Cenoura')){
    console.log('Tem cenoura sim')
}else {
    console.log('Não tem cenoura')
}