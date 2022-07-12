function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max];

    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        if (numerosProibidos.includes(aleatorio)) {
            reject("Int: Número repetido!");
        } else {
            resolve(aleatorio);
        }
    });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = [];
        for (_ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros));
        }
        return numeros;
    } catch (err) {
        if (tentativas < 10) {
            return gerarMegaSena(qtdeNumeros, tentativas + 1);
        } else {
            throw new Error("Ext: Número já existente.");
        }
    }
}

gerarMegaSena(10).then(console.log).catch(console.log);
