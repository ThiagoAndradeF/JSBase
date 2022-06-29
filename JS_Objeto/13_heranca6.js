function Aula(nome, videoID){
    this.nome =nome
    this.videoID= videoID

}

const aula1= new Aula("Bem vindo", 123)
const aula2= new Aula("Até Breve", 456)
console.log(aula1, aula2)

//simulando o new
function novo(f, ...params){ // chama a function molde e n params
    const obj = {}//cria objeto vazio
    obj.__proto__= f.prototype// atribui o protótipo desse objeto ao prototype da função
    f.apply(obj,params)//atribui a esse objeto os params
    return obj // retorna objeto criado
}

const aula3= novo(Aula, "Bem vindo", 123)
const aula4= novo(Aula, "Até breve", 456)

console.log(aula3,aula4)