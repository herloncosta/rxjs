function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Executando...");
        }, tempo);
    });
}

async function retornaValor() {
    return 10;
}

async function executar() {
    const valor = await retornaValor();

    await esperarPor(1500);
    console.log(valor);

    await esperarPor(1500);
    console.log(valor + 1);

    await esperarPor(1500);
    console.log(valor + 2);
}

executar();
