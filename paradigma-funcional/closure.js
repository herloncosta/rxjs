// Closure é quando uma função "lembra"
// do sue escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const somarXMais3 = require("./closure_escopo");

const x = 1000; // a função busca o valor de x onde foi declarada
const resultado = somarXMais3();
console.log(resultado);
