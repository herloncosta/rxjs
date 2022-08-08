const composicao = (...fns) => {
    return (valor) => fns.reduce((acc, fn) => fn(acc), valor);
};

const gritar = (texto) => texto.toUpperCase();
const enfatizar = (texto) => `${texto}!!!`;
const tornarLento = (texto) => texto.split("").join(" ");

const exagerado = composicao(gritar, enfatizar, tornarLento);
const menosExagerado = composicao(gritar, enfatizar);

const resultado1 = exagerado("para");
const resultado2 = menosExagerado("Cuidado com o buraco");

console.log(resultado1);
console.log(resultado2);
