import { Observable } from "rxjs";

// simulando com Promise
// Promise restringe o retorno a apenas uma única vez

const promise = new Promise((resolve) => {
	resolve("stream promise");
});

promise.then(console.log); // stream promise

// implementação de Observable
// Observable permite um número arbitrário de retornos

const observable = new Observable((subscriber) => {
	subscriber.next("observable strem 1");
	subscriber.next("observable strem 2");
	subscriber.next("observable strem 3");
	subscriber.next("observable strem 4");

	// suporta processamento assíncrono
	setTimeout(() => {
		subscriber.next("observable stream 5");
		// encerra os retornos
		subscriber.complete();
	}, 1000);
});

observable.subscribe(console.log);
