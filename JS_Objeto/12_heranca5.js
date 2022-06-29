console.log(typeof String)//function
console.log(typeof Array)//function
console.log(typeof Object)//function
//devido à string ser function, como apontado àcima, é possível criar seus atributos e até mudálos, criando e modificando suas funções.
String.prototype.reverse= function(){
    return this.split('').reverse().join('')
}//cria nova função no prototype da string, nesse caso a "reverse", que é recebida por herança pela string

console.log("Escola Cod3r".reverse()) //escreve a string ao contrário

Array.prototype.first= function(){
    return this[0]  //faz a mesma coisa porém com array, para mostrar o primeiro elemente desta
}

console.log([1,2,3,4,5].first())// usa o atributo criado acima e retorna o primeiro item da array
console.log(['a','b','c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}//Também é possível sobescrever alguma function padrão da API do sistema, porém não é recomendável que pode trazer um problema

console.log('Escola Cod3r'.reverse())

