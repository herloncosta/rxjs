const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(_, conteudo) {
	console.log(conteudo.toString());
}

// execução de forma assíncrona
console.log("Início...");
fs.readFile(caminho, exibirConteudo);

fs.readFile(caminho, (_, conteudo) => {
	console.log(conteudo.toString());
});
console.log("Fim...");

// execução de forma síncrona
console.log("Início...");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim...");
