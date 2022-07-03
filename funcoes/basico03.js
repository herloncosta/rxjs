// Arrow function
const helloWorld = () => console.log("Olá mundo!");
helloWorld();

const saudacao = (nome) => console.log(`E ai ${nome}, blz?!?`);
saudacao("Herlon");

const somar = (...numeros) => {
	// o operador rest transforma as entradas em um array
	let total = 0;
	for (let n of numeros) {
		total += n;
	}
	return total;
};

const resultado = somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(resultado);
