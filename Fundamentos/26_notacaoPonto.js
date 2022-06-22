console.log(Math.ceil(6.1))// Notação ponto chama uma função do objeto Math
const obj1={} //Chama um objeto 
obj1.nome="Bola"// Notação ponto adiciona uma nova instância(função, string, number...) ao objeto
//obj1["nome"] ="Bola2"
console.log(obj1.nome)

function Obj(nome){
    this.nome=nome//this. cria uma instância para atribuição pública do atributo "nome" da função 
    //console.log(typeof this.nome)
    this.exec= function(){// "." usando com o this cria uma execução nova para o nome, que está usando o this
        console.log("Exec...")
    }
}

const obj2= new Obj("Cadeira") 
const obj3= new Obj("Mesa")

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()