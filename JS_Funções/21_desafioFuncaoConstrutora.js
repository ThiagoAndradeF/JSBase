
// function Pessoa (nome="Glaub"){
//     this.getMensagem = () => `meu nome é ${nome}`
// } 

// const Pedro = new Pessoa("Pedro")

// console.log(Pedro.getMensagem())
function Pessoa(nome){
        this.nome= nome
    this.falar= function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1= new Pessoa("João")
p1.falar()

const criarPessoa= nome =>{
    return {
        falar : () => console.log( `Meu nome é ${nome}`)
    }
}
const p2= criarPessoa("Carlos")
p2.falar()