Array.prototype.meuReduce = function (fn, inicial) {
	let acc = inicial !== undefined ? inicial : null;

	for (let i = 0; i < this.length; i++) {
		acc = fn(acc, this[i], i, this);
	}

	return acc;
};

let valores = [45, 55, 100];
const somar = (acc, item) => acc + item;

const resultado = valores.meuReduce(somar);
console.log(resultado);
