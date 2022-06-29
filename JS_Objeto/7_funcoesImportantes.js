const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//ler apenas as chaves dos objetos
console.log(Object.values(pessoa))//ler os valores dos objetos
console.log(Object.entries(pessoa))//ler os conjuntos chave e valores do objeto e colocálos entre arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})// lê em sequência todos os conjuntos 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//torna possível a substituição por número
    writable: false,//torna impossível a sobrescrição
    value: '01/01/2019'//Adiciona o valor à dataNascimento
})

pessoa.dataNascimento = '01/01/2017'//não se sobrescreve devido ao witable:false
console.log(pessoa.dataNascimento)//lê data de nascimento
console.log(Object.keys(pessoa))//chama as chaves de todos os atributos do objeto pessoa

// Object.assign (ECMAScript 2015) 
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // o Object.assign, proporciona a concatenação de variáveis de objetos diferentes e a sobrescrição de variáveis iguais que estão em objetos diferentes
Object.freeze(obj)//freezar o objeto, nada nele pode ser mudado
obj.c = 1234//sobrescrição não funciona devido ao .freeze no objeto 
console.log(obj)//executa o novo objeto feito com assign {a:4 , b:2, c:3 }