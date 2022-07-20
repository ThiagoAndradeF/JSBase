function parIndicePar(numeros) {
    
    return numeros.filter((numero, indice)=>
    {
        const numeroPar = numero%2 === 0 
        const indicePar = indice%2 === 0    
        return numeroPar && indicePar

    })
}


console.log(parIndicePar([0,2,3,4,5,6,8,10]))