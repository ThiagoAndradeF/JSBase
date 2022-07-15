repetir=function(palavra,repeticao){
    const newArray=[]
    for(let i=0;i<repeticao;i++){
        newArray.push(palavra)
    }
    return newArray
}
console.log(repetir("Mant", 2))