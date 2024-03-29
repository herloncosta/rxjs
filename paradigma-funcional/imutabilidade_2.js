const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// 1 - Dados mutáveis
// let total = 0;
// for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
// }
// console.log(total);

// 2 - Reduce
// const somar = (a, b) => a + b;
// const total = nums.reduce(somar);
// console.log(total);

// 3 - Recursividade
function somarArray(array, total = 0) {
    return array.length === 0
        ? total
        : somarArray(array.slice(1), total + array[0]);
}

const total = somarArray(nums);
console.log(total);
