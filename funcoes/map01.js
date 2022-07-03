const nums = [1, 2, 3, 4, 5];
const dobro = (item, index, array) => item * 2 + index + array.length;
console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const primeraLetra = (texto) => texto[0];
const iniciais = nomes.map(primeraLetra);
console.log(nomes, iniciais);
