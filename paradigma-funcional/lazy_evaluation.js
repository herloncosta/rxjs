// simulação do comportamento do setTimeout()
function timeout(time) {
    const fim = Date.now() + time; // tempo atual + 2.5 segundos
    while (Date.now() < fim) {} // espera 2.5 segundos a cada execução
}

// realiza todo o processamento e retorna o resultado
function eager(a, b) {
    // simulando processamento mais pesado com timer
    timeout(2500);
    const valor = Math.pow(a, 3);
    return valor + b;
}

// realiza a primeira parte do processamento e retorna função para execução
// da segunda parte do processamento tornando-o mais flexível
function lazy(a) {
    // processamento mais pesado
    timeout(2500);
    const valor = Math.pow(a, 3);
    return function (b) {
        return valor + b;
    };
}

// processamento assíncrono
console.time("#1 -> eager");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1 -> eager"); // processamento feito em 7.5 segundos

// processamento síncrono e mais flexível
console.time("#2 -> lazy");
// armazena a priemira parte do processamento em lazy3(), realizando-o apenas uma vez
const lazy3 = lazy(3); // primeira parte do processamento
console.log(lazy3(100)); // segunda parte do processamento
console.log(lazy3(200)); // --
console.log(lazy3(300)); // --
console.timeEnd("#2 -> lazy"); // processamento feito em 2.5 segundos
