Array.prototype.meuReduce = function (fn, inicial) {
	let acc = inicial !== undefined ? inicial : this[0];

	for (let i = 0; i < this.length; i++) {
		let item = fn(acc, this[i], i, this);
		acc = item;
	}

	return acc;
};

let valores = [45, 55, 100];
const somar = (acc, item) => acc + item;

const resultado = valores.meuReduce(somar, 0);
console.log(resultado);
