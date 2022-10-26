// Tipos de Operadores
// 1 - Operadores de criação
// 2 - Operadores encadeáveis (Pipeable operators)

import { of, from, map, last, first } from "rxjs";

// criação a partir de uma sequência de itens
of(1, 2, "Maria", true, "último")
	.pipe(last()) // retorna apenas o último valor gerado
	.subscribe((valor) => console.log(`Último valor gerado: ${valor}`));

// criação a partir de um array
from([1, 2, "Maria", true, "último"])
	.pipe(first()) // retorna apenas o primeiro valor gerado
	.pipe(map((element) => element + "!!!"))
	.subscribe((valor) => {
		console.log(`Primeiro valor gerado: ${valor}`); // 1!!!
	});
