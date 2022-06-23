//Armazenando uma função em uma variável
const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow(com retorno explícito) em uma variável
const soma= (a,b) =>{
    return a+b;
} // (função arrow substitui o "function" por "=>")
console.log(soma(2,3))

//Armazenando uma funcao arrow(com retorno implícito) em uma variável
const subtracao=(a,b) => a-b
console.log(subtracao(2,3))

const imprimir2= a => console.log(a)
imprimir2("Legal!!!")
