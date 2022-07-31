// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS pelos seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14;

// Impura - PI é um valor externo
function areaCirc(raio) {
    return raio * raio * PI;
}

// Impura - PI continua sendo um valor externo
function areaCircMath(raio) {
    return raio * raio * Math.PI; // estável
}

// Pura
function areaCircPura(raio, pi) {
    return raio * raio * pi;
}

console.log(areaCircPura(10, 3.14));
console.log(areaCircPura(10, 3.1415));
console.log(areaCircPura(10, Math.PI));
