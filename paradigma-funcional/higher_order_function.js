// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions

function executar(fn, ...params) {
    // função como argumento
    return function (textoInicial) {
        // retornando função
        return `${textoInicial} ${fn(...params)}!`;
    };
}

function somar(a, b, c) {
    return a + b + c;
}

function multiplicar(a, b) {
    return a * b;
}

const r1 = executar(somar, 4, 5, 6)("O valor da soma é");
// const operacao = executar(somar, 4, 5, 6);
// const resultado = operacao("O valor da soma é");
// console.log(resultado);

const r2 = executar(multiplicar, 30, 40)("O valor da multiplicação é");

console.log(r1);
console.log(r2);
