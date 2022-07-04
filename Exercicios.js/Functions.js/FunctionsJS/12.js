// 12) Faça um algoritmo que calcule o fatorial de um número.
fatorial=(n)=>{
    let fat = n;
    n = n-1
    for( n ; n>0; n--){
        fat *= n
    }
    return fat
}
console.log(fatorial(12))