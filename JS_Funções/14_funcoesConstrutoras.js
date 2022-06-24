function Carro(velocidadeMaxima=200, delta=5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico

    this.acelerar =function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+=delta
        }else{
            velocidadeAtual=velocidadeMaxima}
    }

    this.frear = function(){
        if(velocidadeAtual>delta){
            velocidadeAtual-=delta
        }else{
            velocidadeAtual=0}
    }

    this.getVelocidadeAtual= function(){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar() 
uno.acelerar() 
uno.acelerar() 
uno.frear()
console.log(uno.getVelocidadeAtual())

const ferrari= new Carro(300,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.frear()
console.log(ferrari.getVelocidadeAtual())