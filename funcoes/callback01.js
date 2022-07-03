function exec(fn, n1, n2) {
	fn(n1, n2);
}

const somarNoTerminal = (n1, n2) => console.log(n1 + n2);
const subtrairNoTerminal = (n1, n2) => console.log(n1 - n2);
const subtrair = (n1, n2) => console.log(n1 - n2);

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 40, 12);

const r = exec(subtrair, 50, 25);
console.log(r);
exec(subtrair, 10, 10);

setInterval(function () {
	console.log("Exec 3...");
}, 5000);
