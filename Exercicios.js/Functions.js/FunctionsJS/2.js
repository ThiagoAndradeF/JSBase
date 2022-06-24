// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function determinarTrinangulo(a,b,c){
    if(a==b==c){
        console.log("Triangulo Equilátero")
    }else if(a!=b!=c && a!=c!=b){
        console.log("Triangulo Escaleno")
    }else{
        console.log("Triangulo Isóceles")
    }
}

determinarTrinangulo(1,2,3)