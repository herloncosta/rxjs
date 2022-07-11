const fs = require("fs");
const path = require("path");

// Solução da aula
function lerArquivo(caminho) {
	return new Promise((resolve) => {
		fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()));
		console.log("Depois de ler");
	});
}

const caminho = path.join(__dirname, "dados.txt");
lerArquivo(caminho).then((conteudo) => console.log(conteudo));

// Minha solução
// function lerArquivo() {
// 	return new Promise(function (resolve) {
// 		const conteudo = fs.readFileSync(path.join(__dirname, "dados.txt"), "utf8");
// 		resolve(conteudo);
// 	});
// }

// lerArquivo().then(console.log);
