const fn = require("./functions");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
    .then((caminhos) => {
        const resultado = fn.filtrarExtensao(caminhos, "srt");
        return resultado;
    })
    .then(console.log);
