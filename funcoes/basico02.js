function bomDia() {
	console.log("Bom dia!");
}

function boaTarde() {
	console.log("Boa tarde!");
}

// Passar uma função como parâmetro para outra
function executarQualquerCoisa(fn) {
	if (typeof fn === "function") fn();
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retonar uma função a partir de outra função
const potencia = (base) => (exp) => Math.pow(base, exp);

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const resultadoDireto = potencia(2)(4);
console.log(resultadoDireto);

// this

Array.prototype.log = function () {
	// Array.prototype.log = () => {
	// é gerado um erro por conta do contexto do this
	console.log(this);
};

Array.prototype.primeiro = function () {
	console.log(this[0]);
};

Array.prototype.ultimo = function () {
	console.log(this[this.length - 1]);
};

const numeros = [1, 2, 3];

numeros.log();
numeros.primeiro();
numeros.ultimo();
