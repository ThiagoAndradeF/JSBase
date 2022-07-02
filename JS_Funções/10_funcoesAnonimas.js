const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a,b, operacao =soma/*por padrão a operacao selecionada é a soma */){
    console.log(operacao(a,b))
}

imprimirResultado(3,4) //soma implícita
imprimirResultado(3,4,soma)//soma explícita
imprimirResultado(3,4,function(x,y){return x-y})// chamando uma função anônima direta
imprimirResultado(3,4,(x,y)=> x*y)//chamando uma arrow function direto(anônima por padrão)

const pessoa={
    falar: function(){
            console.log("Opa")
    }
}

pessoa.falar()
