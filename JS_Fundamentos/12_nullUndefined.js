let valor // não inicializada(atribuida valor)
console.log(valor)

valor = null //Ausência de valor(não aponta mais pra nenhum espaço de memória)
console.log(valor)
// console.log(valor.toString()) //Erro! (impossível converter null)


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco=3.50
console.log(produto)

produto.preco= undefined // evite atribuir undefined
console.log(!!produto.preco) // undefined em bool é falso
//delete produto.preco (prova que vazio é diferente de null ou undefined)
console.log(produto)

produto.preco = null //sem preço, preço aponta para nenhum espaço de memória
console.log(!!produto.preco)//bool de null é false 
console.log(produto)

