//pessoa -> 123 ->{...}
const pessoa ={nome : "João"} 
pessoa.nome="Pedro" 
console.log(pessoa)//escreverá "Pedro", pois apesar do objeto ser constante, os seus dadis podem ser sobrescrito

//pessoa ->456 ->{...}
//pessoa = {nome: "Ana"}// dá erro, pois nesse caso, o dado está tentando apontar para outro endereço de memória

Object.freeze(pessoa)

pessoa.nome="Maria"// Nõa muda de Pedro
pessoa.end= "Rua ABC"//Não é adicionado
delete pessoa.nome

console.log(pessoa.nome) 
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Joao"})// ao usar Object.freeze, nada no object pode ser alterado
pessoaConstante.nome="Maria"
console.log(pessoaConstante)