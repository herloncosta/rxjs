// refactoring
// const composicao = (...fns) => valor => fns.reduce((acc, fn) => fn(acc), valor)

function composicao(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    };
}

function gritar(texto) {
    return texto.toUpperCase(); // PARA
}

function enfatizar(texto) {
    return `${texto}!!!`; // PARA!!!
}

function tornarLento(texto) {
    return texto.split("").join(" "); // P A R A ! ! !
}

const resultado = composicao(gritar, enfatizar, tornarLento)("para");
console.log(resultado); // P A R A ! ! !
