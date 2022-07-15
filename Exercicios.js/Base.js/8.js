const multiplicar=function(n1,n2){
    let multiplicacao = 0 
    for(let i=0;i<n2;i++){
        multiplicacao+=n1;
    }  
    return multiplicacao
}

console.log(multiplicar(10,35))