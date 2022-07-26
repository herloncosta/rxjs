const fn = require("./functions");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
    .then((caminhos) => fn.filtrarExtensao(caminhos, "srt"))
    .then(console.log);
