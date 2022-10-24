import { obterResposta } from "./obterResposta.js";

// Observer 1
function observer1(event) {
	// Event
	console.log(`Event: ${event.resp}`);
	setTimeout(() => {
		console.log("1: processamento finalizado");
	}, 1000);
}

// Observer 2
function observer2() {
	setTimeout(() => {
		console.log("2: processamento finalizado");
	}, 2000);
}

// Subject
async function subject(observers) {
	while (true) {
		const resp = await obterResposta("O evento foi detectado? (s/n/q) ");
		if (resp.toLowerCase().trim() === "s") {
			observers.forEach((observer) => observer({ resp })); // notifica Observers
		} else if (resp.toLowerCase().trim() === "q") {
			break;
		}
	}
}

subject([observer1, observer2]); // Registro de Observers
