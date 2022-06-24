class Pessoa{
    constructor(nome){
        this.nome= nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1= new Pessoa("João")
p1.falar()//Dá problema dependendo do seu local de sua forma de execução, as vezes não chama o que foi passado por parâmetro/ principalmente em browser

const criarPessoa= nome =>{
    return {
        falar : () => console.log( `Meu nome é ${nome}`)
    }
}
const p2= criarPessoa("Carlos")
p2.falar()