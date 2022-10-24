import { createInterface } from "node:readline";

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
