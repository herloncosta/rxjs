// setTimeout(function () {
//     console.log("Executando callback...");

//     setTimeout(function () {
//         console.log("Executando callback...");

//         setTimeout(function () {
//             console.log("Executando callback...");
//         }, 2000);
//     }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando callback...");
            resolve("Resolvido.");
        }, tempo);
    });
}

esperarPor(3000) // espera 3 segundos
    .then(() => esperarPor(3000)) // espera mais 3 segundos
    .then(() => esperarPor()); // espera 2 segundos
