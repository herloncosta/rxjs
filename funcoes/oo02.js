class Produto {
    constructor(nome, preco, desc = 0.15) {
        this._nome = nome;
        this._preco = preco;
        this.desc = desc;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get nome() {
        return `Nome: ${this._nome}`;
    }

    get preco() {
        return `O preço do produto ${this._nome} é ${this._preco}`;
    }

    get precoFinal() {
        return this._preco * (1 - this.desc);
    }
}

const p1 = new Produto("Caneta", 8.59);
console.log(p1);

const p2 = new Produto("Geladeira", 3000);

console.log(p2);
console.log(p2.preco);
console.log(p2.precoFinal);
