// simulado stream a partir de um array
function gerarElementos(array) {
	return {
		iniciar(fn, segundos = 1000) {
			let indice = 0;
			const interval = setInterval(() => {
				if (indice >= array.length) {
					clearInterval(interval);
				} else {
					fn(array[indice]);
					indice++;
				}
			}, segundos);

			return {
				parar() {
					clearInterval(interval);
				},
			};
		},
	};
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temp1 = gerarElementos(numeros);
const exec1 = temp1.iniciar((n) => console.log(`#1 ${Math.pow(2, n)}`));

setInterval(() => {
	exec1.parar();
}, 4000);
