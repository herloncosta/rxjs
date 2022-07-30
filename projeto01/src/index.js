const fn = require("./functions");
const path = require("path");

const caminhoPasta = path.join(__dirname, "legendas");

const simbolos = [
    "♪",
    ".",
    "?",
    "-",
    "_",
    ",",
    "<i>",
    "</i>",
    "\r",
    "[",
    "]",
    "(",
    ")",
    " ",
    "",
    "'",
    ":",
    "♪",
];

const mesclarConteudos = (conteudos) => conteudos.join(" ");
const separarPorPalavras = (conteudos) => conteudos.split("\n");

fn.lerDiretorio(caminhoPasta)
    .then((caminhos) => fn.filtrarExtensao(caminhos, ".srt"))
    .then((listaCaminhos) => fn.lerArquivos(listaCaminhos))
    .then(mesclarConteudos)
    .then(separarPorPalavras)
    .then(fn.removerSeVazio)
    .then((linhas) => fn.removerSeIncluir("-->", linhas))
    .then(fn.removerSeApenasNumero)
    .then((linhas) => fn.removerSimbolos(simbolos, linhas))
    .then(mesclarConteudos)
    .then(separarPorPalavras)
    .then(console.log);
