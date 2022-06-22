function rand([min=0, max=1000]){
    if(min>max) [min, max]=[max, min]
    const valor= Math.random()*(max-min) + min;
    return Math.floor(valor)//Math.floor é para transformar valor em inteiro
}

console.log(rand([50,40]))
console.log(rand([992]))