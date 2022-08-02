const pessoa = {
    nome: "Maria",
    altura: 1.76,
    cidade: "São Paulo",
    end: {
        rua: "Qualquer",
    },
};

// Atribuição por referência (utiliza o mesmo espaço em memória)
const novaPessoa = pessoa;

pessoa.nome = "João";
pessoa.cidade = "Fortaleza";

console.log(pessoa);

// Passagem por referência (utiliza o mesmo espaço em memória)
// Função impura
function alterarPessoa(novaPessoa) {
    novaPessoa.nome = "Pedro";
    novaPessoa.cidade = "Salvador";
}

alterarPessoa(pessoa);
console.log(pessoa);

// Função pura
function alterarPessoaComImutabilidade(pessoa) {
    const novaPessoa = { ...pessoa }; // shallow clone
    novaPessoa.nome = "Marina";
    novaPessoa.cidade = "Rio de Janeiro";
    return novaPessoa; // novo objeto retornado
}

const novaPessoa2 = alterarPessoaComImutabilidade(pessoa);

console.log(pessoa); // objeto original mantido
console.log(novaPessoa2); // nova pessoa criado

let a = 3;
let b = a; // passagem por valor (cópia) -> ocupa espaço diferente em memória

a++; // 4
b--; // 2

console.log(a, b);

// INFORMAÇÃO ADICIONAL

// Solução prática para cópia em todos os níveis de um objeto
// const _ = require("lodash");

// const a = [1, 2, 3, 4];
// const b = _.cloneDeep(a);

// Uma boa prática para tornar um objeto imutável é
// utilizar o Object.freeze() em todos os níveis necessários
