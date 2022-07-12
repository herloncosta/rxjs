// função construtora
function Produto(nome, preco, desc = 0.15) {
    this._nome = nome;
    this._preco = preco;
    this._desc = desc;

    this.precoFinal = function () {
        return this._preco * (1 - this._desc);
    };
}

// definindo método no protótipo de Produto
Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} Preço: ${this._preco}`);
};

const p1 = new Produto("Caneta", 5.67);

console.log(p1.precoFinal());
p1.log();

// definindo getters para Produto
Object.defineProperty(Produto.prototype, "desc", {
    get: function () {
        return this._desc;
    },
    set: function (novoDesc) {
        if (novoDesc > 0 && novoDesc < 1) {
            this._desc = novoDesc;
        }
    },
});

Object.defineProperty(Produto.prototype, "descString", {
    get: function () {
        return `${this._desc * 100}% de desconto!`;
    },
});

p1.desc = 2; // não altera, desc precisa ser menor que 1
console.log(p1.desc);

p1.desc = 0.8; // altera o desc para 80%
console.log(p1.desc);
console.log(p1.descString);
