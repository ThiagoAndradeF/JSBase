//Funcao sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)// retorna a soma desses números, se for string uma concatenação
imprimirSoma(2)// retorna NaN (not a number)
imprimirSoma(2, 10, 4, 5, 6, 7) //retorna a soma dos 2 primeiros
imprimirSoma()// retorna NaN (not a number)

// Funcao com retorno

function soma(a, b = 1) {
    return a+b;
}

console.log(soma(2,3))
console.log(soma(2))// ao já ter atribuido valor a b, não resultará em NaN
console.log(soma())//NaN