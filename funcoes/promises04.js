function funcionarOuNao(valor, chanceErro) {
    return new Promise(function (resolve, reject) {
        if (Math.random() < chanceErro) {
            reject("Ocorreu um erro!");
        } else {
            resolve(valor);
        }
    });
}

funcionarOuNao("Testando...", 0.5)
    .then((valor) => console.log(valor))
    .then(
        (valor2) => consol.log(valor2),
        (err) => console.log(`Erro específico: ${err}`) // tratamento de erro específico
    )
    .catch((err) => console.log(err)) // tratamento de erro geral
    .then(() => console.log("Fim da execução!"));
