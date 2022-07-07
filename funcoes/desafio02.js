const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
    { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
    { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
    { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
    { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

const frageis = (item) => item.fragil;
const totais = (item) => item.qtde * item.preco;

const mediaInicial = { qtde: 0, total: 0, media: 0 };

const media = carrinho
    .filter(frageis)
    .map(totais)
    .reduce((acc, next) => {
        const novaQtde = acc.qtde + 1;
        const novoTotal = acc.total + next;
        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde,
        };
    }, mediaInicial);

console.log(media);
