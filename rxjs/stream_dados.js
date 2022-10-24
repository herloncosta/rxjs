// simulando stream de dados
function gerarNumeros() {
	let num = 0;

	return {
		iniciar(fn, segundos = 1000) {
			const interval = setInterval(() => {
				fn(num++);
			}, segundos);

			return {
				parar() {
					clearInterval(interval);
				},
			};
		},
	};
}

const temp1 = gerarNumeros(); // { iniciar: [Function: iniciar] }
const exec1 = temp1.iniciar((n) => console.log(`#1 ${n * 2}`), 1000);
const exec11 = temp1.iniciar((n) => console.log(`#1.1 ${n * 2}`), 500);
const exec12 = temp1.iniciar((n) => console.log(`#1.2 ${n * 2}`));

const temp2 = gerarNumeros(); // { iniciar: [Function: iniciar] }
const exec2 = temp2.iniciar((n) => console.log(`#2 ${n + 100}`), 2000);

setTimeout(() => {
	exec1.parar();
	exec11.parar();
	exec2.parar();
}, 10000); // 10s

setTimeout(() => {
	exec12.parar();
}, 12000); // 12s
