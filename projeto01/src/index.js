const fn = require("./functions");
const path = require("path");

const caminhoPasta = path.join(__dirname, "legendas");

const simbolos = ["♪", "_", "</i>", "(", ")", " ", "", ":", "♪"];

fn.lerDiretorio(caminhoPasta)
    .then((caminhos) => fn.filtrarExtensao(caminhos, ".srt"))
    .then((listaCaminhos) => fn.lerArquivos(listaCaminhos))
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor("\n"))
    .then(fn.removerSeVazio)
    .then((linhas) => fn.removerSeIncluir("-->", linhas))
    .then(fn.removerSeApenasNumero)
    .then((linhas) => fn.removerSimbolos(simbolos, linhas))
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor(" "))
    .then(fn.removerSeVazio)
    .then((palavras) => fn.removerSeIncluir("\r", palavras))
    .then((palavras) => fn.removerSeIncluir("?", palavras))
    .then((palavras) => fn.removerSeIncluir("-", palavras))
    .then((palavras) => fn.removerSeIncluir("<i>", palavras))
    .then((palavras) => fn.removerSeIncluir(",", palavras))
    .then((palavras) => fn.removerSeIncluir(".", palavras))
    .then((palavras) => fn.removerSeIncluir("[", palavras))
    .then((palavras) => fn.removerSeIncluir("]", palavras))
    .then((palavras) => fn.removerSeIncluir('"', palavras))
    .then((palavras) => fn.removerSeIncluir("!", palavras))
    .then((palavras) => fn.removerSeIncluir("'", palavras))
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtribNumerico("qtde", "desc"))
    .then(console.log);
