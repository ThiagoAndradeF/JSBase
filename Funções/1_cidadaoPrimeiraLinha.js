// Função em JS é First- Class Object (citizens)
//Higher-order function

//criar de forma literal
function fun1(){}

//armazenar em variável
const fun2= function(){}

//armazenar em array
const array= [function (a, b) { return a + b }, fun1, fun2 ]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return "opa" }
console.log(obj.falar())//necessário alem de chamar o objeto, instanciar a função dentro dele

//passar funcao por param
function run(fun){
    fun()
}
run(function(){console.log("Executando...")})
//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        return console.log (a + b + c) 
    }
}
soma(2,3)(4)// instanciar as 2 funções diretas

const cincoMais= soma(2,3)// instanciar uma função e guardar em uma variável
cincoMais(5)//após isso instanciar a função contida na função que está contida na constante
