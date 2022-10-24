import { createInterface } from "node:readline";

// processamento observer
export const obterResposta = (pergunta) => {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question(pergunta, (resp) => {
			resolve(resp);
			rl.close();
		});
	});
};
