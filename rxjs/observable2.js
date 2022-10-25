import { Observable } from "rxjs";

// outra forma de implementar um Observable, porém, foi depreciada
// e será removida do v8
const observable = Observable.create((subscriber) => {
	subscriber.next("stream 1");
	subscriber.next("stream 2");
	subscriber.next("stream 3");

	if (Math.random() > 0.5) {
		subscriber.complete();
	} else {
		subscriber.error("Falha na transmissão!");
	}
});

// passando funções para tratamento das streams
observable.subscribe(
	// sucesso
	(stream) => console.log(stream), // stream1, stream2, stream3
	// erro
	(error) => console.log(error), // Falha na transmissão!
	// completo
	() => console.log("Fim da transmissão!")
);

// passando objeto com os métodos de referência
observable.subscribe({
	next: (stream) => console.log(stream),
	error: (message) => console.log(message),
	complete: () => console.log("Fim da transmissão!"),
});
