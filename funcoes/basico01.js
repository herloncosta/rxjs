let a = 4;
console.log(a);

// Function declaration
function bomDia() {
	console.log("Bom dia!");
}

bomDia();

// Function expression
const boaTarde = function () {
	console.log("Boa tarde!");
};

boaTarde();

function somar(a, b) {
	return a + b;
}

let resultado = somar(3, 4); // retorno normal
console.log(resultado);

resultado = somar(3, 5, 6, 7); // lê 3 e 5, ignorando os demais
console.log(resultado);

resultado = somar(3); // retorna NaN porque 3 + undefined = NaN
console.log(resultado);

resultado = somar(); // retorna NaN porque nenhum valor foi passado
console.log(resultado);
