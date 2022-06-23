function Pessoa(){
    this.idade=0
    const self=this /// criação da variável a qual o this foi atribuido à ela;
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.blind(this)*/,1000)
}
new Pessoa