//NOVO RECURSO DO ES2015 
//Criação de novas instâncias sem uso da notação "."
const pessoa= {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}
console.log(pessoa)




const{nome, idade} = pessoa //forma de acessar essas variáveis, sem a notação ponto 
console.log(nome, idade) 
//console.log(pessoa.nome, pessoa.idade) [mesma coisa, porém em notação ponto]


const{nome: n, idade: i} = pessoa  // Além de acessar as variáveis, é possível também renomealas
console.log(n,i)

const{sobrenome, bemHumorada = true } = pessoa// É possível também adicionar atributos por destructuring
//sobrenome por exemplo é undefined(não tem valor definido) e o bemHumorada retorna o bool true 
console.log(sobrenome, bemHumorada)


const{endereco: {logradouro, numero, cep}} = pessoa //também é possível acessar uma variável dentro de outra 
//por exemplo logradouro, está dentro de endereço, que está dentro de pessoa
console.log(logradouro, numero, cep) 
//console.log(pessoa.endereco.logradouro,pessoa.endereco.numero,pessoa.endereco.cep) [mesma coisa escrita
//com notação ponto ]
