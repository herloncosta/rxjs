// O método flat() cria um novo array com todos elementos
// sub-arrays concatenados nele de forma recursiva até a
// profundidade especificada. Ex.: .flat(2)

const letrasAninhadas = [
    ["O", "l", "a"],
    [" "],
    ["M", "u", "n", "d", "o"],
    ["!", "!", "!"],
];

const letras = letrasAninhadas.flat(1);
// console.log(letras);

const resultado = letras
    // .flatMap((l) => [l])
    .map((l) => l.toUpperCase())
    .reduce((acc, l) => acc + l);

console.log(resultado);
