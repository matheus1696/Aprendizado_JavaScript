// 1. No array abaixo, qual o múmero que pega a Ferrari?
let carros = ["BMW", "Ferrari", 'Mercedes'];
let fabricante = '1';
console.log(`1. ${carros[fabricante]}`);

// 2. Troque a Ferraria por Audi

carros[fabricante] = "Audi";

console.log(`2. Lista com Audi`);
console.log(carros);

//3. Adicione o Volvo a lista

carros.push("Volvo");

console.log(`3. Lista com Volvo`);
console.log(carros);

//4. Exiba quantos itens no Array
console.log('4. Item no array: ' + carros.length);