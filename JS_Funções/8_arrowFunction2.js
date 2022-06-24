function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++ 
        console.log(this.idade) //This referenciando o param de pessoa
    },1000)
}
new Pessoa