function esperarPor(tempo = 2000) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			console.log("Executando promise...");
			resolve("Resolvido...");
		}, tempo);
	});
}

esperarPor(3000)
	.then(() => esperarPor())
	.then(() => esperarPor())
	.then(console.log);
