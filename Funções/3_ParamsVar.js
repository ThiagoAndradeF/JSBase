function soma(){
    let soma=0
    for(i in arguments){ // a palavra reservada arguments faz referencia aos parâmetros de uma função
        soma+=arguments[i]
    }
    return soma
}

console.log(soma())//0 (valor padrão da variável soma)
console.log(soma(1))//1
console.log(soma(1.1, 2.2, 3.3))//6.6


console.log(soma(1.1, 2.2 , "Teste"))// 3.3000000Teste (os 0 se dão devido a falta de exatidão do js em números com ponto )
console.log(soma("a","b","c"))//0abc