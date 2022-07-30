const fs = require("fs");
const path = require("path");

function lerDiretorio(caminhoPasta) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminhoPasta);
            arquivos = arquivos.map((caminhoArquivo) =>
                path.join(caminhoPasta, caminhoArquivo)
            );
            resolve(arquivos);
        } catch (err) {
            reject(err);
        }
    });
}

function filtrarExtensao(array, extensao) {
    return array.filter((item) => item.endsWith(extensao));
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho);
            resolve(conteudo.toString());
        } catch (e) {
            reject(e);
        }
    });
}

function lerArquivos(arrCaminhos) {
    return Promise.all(arrCaminhos.map((caminho) => lerArquivo(caminho)));
}

function removerSeVazio(array) {
    return array.filter((el) => el.trim());
}

function removerSeIncluir(texto, array) {
    return array.filter((item) => !item.includes(texto));
}

function removerSeApenasNumero(array) {
    return array.filter((item) => {
        let numero = !parseInt(item.trim()); // retorna true se não for number
        return numero != 0 && !!numero; // retona true se for diferente de 0 e se não for NaN
    });
}

function removerSimbolos(simbolos, array) {
    return array.map((item) => {
        let textoSemSimbolos = item;
        simbolos.forEach((simbolo) => {
            return (textoSemSimbolos = item.split(simbolo).join(" "));
        });
        return textoSemSimbolos;
    });
}

function mesclarConteudos(conteudos) {
    return conteudos.join(" ");
}

function separarTextoPor(simbolo) {
    return function (texto) {
        return texto.split(simbolo);
    };
}

function agruparElementos(palavras) {
    return Object.values(
        palavras.reduce((acc, palavra) => {
            const el = palavra.toLowerCase();
            const qtde = acc[el] ? acc[el].qtde + 1 : 1;
            acc[el] = { elemento: el, qtde };
            return acc;
        }, {})
    );
}

module.exports = {
    lerArquivo,
    lerArquivos,
    lerDiretorio,
    filtrarExtensao,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarConteudos,
    separarTextoPor,
    agruparElementos,
};
