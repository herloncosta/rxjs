const composicao = (...fns) => {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            // verifica se a função é uma Promise
            if (Promise.resolve(acc) === acc) {
                return fn(await acc);
            } else {
                return fn(acc);
            }
        }, valor);
    };
};

const gritar = (texto) => texto.toUpperCase();
const enfatizar = (texto) => `${texto}!!!`;
const tornarLento = (texto) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto.split("").join(" "));
        }, 2000);
    });
};

const exagerado = composicao(gritar, enfatizar, tornarLento);
const menosExagerado = composicao(gritar, enfatizar);

exagerado("para").then(console.log);
menosExagerado("Cuidado com o buraco").then(console.log);
