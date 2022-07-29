const fn = require("./functions");
const path = require("path");

const caminhoPasta = path.join(__dirname, "legendas");

fn.lerDiretorio(caminhoPasta)
    .then((caminhos) => fn.filtrarExtensao(caminhos, ".srt"))
    .then((listaCaminhos) => fn.lerArquivos(listaCaminhos))
    .then((conteudos) => conteudos.join("\n"))
    .then((todoConteudo) => todoConteudo.split("\n"))
    .then(fn.removerSeVazio)
    .then((linhas) => fn.removerSeIncluir("-->", linhas))
    .then(fn.removerSeApenasNumero)
    .then(console.log);
