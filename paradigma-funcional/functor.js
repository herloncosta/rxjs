// Functors são objetos que implementam a função MAP,
// que também é um "Wrapper" de um valor

// Array é um exemplo de functor
const nums = [1, 2, 3, 4, 5, 6];
const novosNums = nums.map((num) => num + 10).map((num) => num * 2);
console.log(nums, novosNums);

function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined;
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null);
            } else {
                const novoValor = fn(this.valor);
                return TipoSeguro(novoValor);
            }
        },
    };
}

const resultado = TipoSeguro("Esse é um texto")
    .map((texto) => texto.toUpperCase())
    .map((texto) => `${texto}!!!`)
    .map((texto) => texto.split("").join(" "));

console.log(resultado.valor);
