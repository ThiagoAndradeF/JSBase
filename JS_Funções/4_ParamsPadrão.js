// estratégia 1 para gerar valor padrão
function soma1(a,b,c){
    a=a || 1
    b=b || 1
    c=c || 1
    return a+b+c
    //leva como princípio que uma variável por padrão é undefined, logo é false, e números diferentes de 0 são true, porém tem um erro ao fazer calculos com 0
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a= a!==undefined?a:1//se valor for igual a undefined, valor é igual a 1 
    b =1 in arguments?b :1 
    c = isNaN(c) ? 1 : c
    return a+ b +c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do ES2015
function soma3(a=1,b=1,c=1){
    return a + b + c
}/// mais recomendado
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))