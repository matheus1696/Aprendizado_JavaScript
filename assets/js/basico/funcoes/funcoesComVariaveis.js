//Variáveis criadas fora das funções, são executadas em qualquer local (Escopo Global)
let count = 0

function add() {
    //Variáveis criadas dentro das funções, pertence somente as funções (Escopo Local)
        //let count = 0
        count++;
}

add();
add();

console.log(count);

