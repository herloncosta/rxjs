import { from, asyncScheduler, observeOn } from "rxjs";

console.log("Antes...");

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	.pipe(observeOn(asyncScheduler))
	.subscribe(console.log);

console.log("Depois...");
