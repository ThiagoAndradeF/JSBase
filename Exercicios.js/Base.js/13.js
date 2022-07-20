const arrayNumeros = function (array){
    const apenasNumeros = a => typeof a === "number" 
    return array.filter(apenasNumeros)
}

console.log(arrayNumeros([10,20,30,"leleco", "hiperativo", true ]))