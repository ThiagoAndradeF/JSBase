function area(largura, altura){
    const area= largura * altura
    if(area>20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}
console.log(area(2,2))
console.log(area(2))//NaN ,pois ao não preencher os 2 parâmetros, o não preenchido é assumido o valor de undefined
console.log(area())//NaN
console.log(area(2,3,17,22,44))// só leva em conta 2 valores
console.log(area(5,5)) //retorna o "valor acima do permitido 25m2" e undefined(pois por não ter "return" na função, ela retorna por padrão undefined)