const carrinho = [
	{ nome: "Caneta", qtde: 10, preco: 7.99 },
	{ nome: "Impressora", qtde: 0, preco: 649.5 },
	{ nome: "Caderno", qtde: 4, preco: 27.1 },
	{ nome: "Lapis", qtde: 3, preco: 5.82 },
	{ nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// const getNome = (produto) => produto.nome;
// const nomes = carrinho.map(getNome);
// console.log(nomes);

// const getPrecos = (produto) => produto.qtde * produto.preco;
// const precos = carrinho.map(getPrecos);
// console.log(precos);

// implementando função map
Array.prototype.meuMap = function (fn) {
	const novoArray = [];

	for (let i = 0; i < this.length; i++) {
		const resultado = fn(this[i], i, this);
		novoArray.push(resultado);
	}

	return novoArray;
};

const getNome = (produto) => produto.nome;
const nomes = carrinho.meuMap(getNome);
console.log(nomes);

const getPrecos = (produto) => produto.qtde * produto.preco;
const precos = carrinho.meuMap(getPrecos);
console.log(precos);
