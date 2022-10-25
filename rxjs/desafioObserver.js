import { Observable, noop } from "rxjs";

const entre = (min, max) => {
	if (min > max) throw Error("O valor de min deve ser menor que max!");
	const obs = new Observable((sub) => {
		try {
			// sequência com notação literal de Array para evitar mutabilidade
			Array(max - min)
				.fill()
				.map((_, index) => sub.next(min + index));
		} catch (e) {
			sub.error(e);
		}
		sub.complete();
	});

	return obs;
};

entre(5, 10).subscribe({
	next: (stream) => console.log(stream),
	error: (message) => console.error(message),
	noop, // utilizado quando não há operação
	// complete: () => console.log("stream completa"),
});
