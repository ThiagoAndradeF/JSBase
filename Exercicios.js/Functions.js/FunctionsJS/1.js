// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.


function Calcular(a,b){
    return{
    somar : a+b,
    subtrair : a-b,
    dividir :a/b,
    multiplicar :a*b
    }
}
console.log(Calcular(4,2))