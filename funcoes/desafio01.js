function somar(n1) {
	return function (n2) {
		return function (n3) {
			return n1 + n2 + n3;
		};
	};
}

const resultadoSoma = somar(3)(4)(5);
console.log(resultadoSoma);

function calcular(n1) {
	return function (n2) {
		return function (fn) {
			return fn(n1, n2);
		};
	};
}

function soma(n1, n2) {
	return n1 + n2;
}

function subtracao(n1, n2) {
	return n1 - n2;
}

function multiplicar(n1, n2) {
	return n1 * n2;
}

function divisao(n1, n2) {
	return n1 / n2;
}

const calcularSoma = calcular(10)(20)(soma);
console.log(calcularSoma);

const calcularSubtracao = calcular(10)(20)(subtracao);
console.log(calcularSubtracao);

const calcularMultiplicacao = calcular(10)(20)(multiplicar);
console.log(calcularMultiplicacao);

const calcularDivisao = calcular(10)(20)(divisao);
console.log(calcularDivisao);
