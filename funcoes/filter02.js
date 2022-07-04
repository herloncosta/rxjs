// Implementação da função filter
Array.prototype.meuFilter = function (fn) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        let item = fn(this[i], i, this);
        if (item) novoArray.push(this[i]);
    }

    return novoArray;
};

const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99 },
    { nome: "Impressora", qtde: 0, preco: 649.5 },
    { nome: "Caderno", qtde: 4, preco: 27.1 },
    { nome: "Lapis", qtde: 3, preco: 5.82 },
    { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const qtdeMaiorQueZero = (produto) => produto.qtde > 1;
const produtosEmEstoque = carrinho.meuFilter(qtdeMaiorQueZero);

console.log(produtosEmEstoque);
