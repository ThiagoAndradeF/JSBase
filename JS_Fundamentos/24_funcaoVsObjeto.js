console.log(typeof Object) //como esperado, retornará function
console.log(typeof new Object)// ao usar o new, retornará um object

const Cliente = function(){}
console.log(typeof Cliente)//como esperado, uma variável que retorna uma function retornará function
console.log(typeof new Cliente)// ao usar o new, retornará um object

class Produto{} //ES 2015(ES6), a partir daí classes também são funções
console.log(typeof Produto)
console.log(typeof new Produto())