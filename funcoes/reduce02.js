// Implementação do método reduce
Array.prototype.meuReduce = function (fn, valorInicial) {
    for (let i = 0; i < this.length; i++) {
        valorInicial += fn(valorInicial, this[i]);
    }

    return valorInicial;
};

const somar = (acc, item) => acc + item;

const valores = [34, 65, 78];
console.log(valores.meuReduce(somar, 0));

// console.log(valores.reduce(somar));
