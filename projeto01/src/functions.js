const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho);
            arquivos = arquivos.map((arquivo) => path.join(__dirname, arquivo));
            resolve(arquivos);
        } catch (err) {
            reject(err);
        }
    });
}

function lerArquivo(caminho) {
    return new Promise((res, rej) => {
        fs.readFile(caminho, "utf8", (err, data) => {
            if (err) rej(err);
            res(data);
        });
    });
}

module.exports = {
    lerArquivo,
    lerDiretorio,
};
