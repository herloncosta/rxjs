// função construtora
function Produto(nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this.desc = desc;
    console.log(p2);

    this.precoFinal = function () {
        return this.preco * (1 - this.desc);
    };
    // parâmetro privado da função
    let privado = "valor acessado apenas dentro da função";
}

const p1 = new Produto("Caneta", 8.59);
console.log(p1);

const p2 = new Produto("Geladeira", 3000);

console.log(p2);
console.log(p2.preco);
console.log(p2.precoFinal());
