// função impura
function ordenar(array) {
    return array.sort((a, b) => a - b); // efeito colateral observável
}

// Um array, mesmo atribuído a uma constante pode ter seus
// dados internos alterados, só não pode ser reatribuído.
// Para evitar esse comportamento podemos usar o Object.freeze().

const nums = [3, 1, 7, 9, 4, 6];
Object.freeze(nums); // a partir daqui os valores internos
// não podem mais ser alterados

nums[0] = 1000;
console.log(nums);

// ordenar(nums);
// console.log(nums); // o array original foi modificado

function ordernarImutavel(array) {
    return [...array].sort((a, b) => a - b); // clonando array usando o operador spread
}

const arrayOrdenado = ordernarImutavel(nums);
console.log(nums, arrayOrdenado);
