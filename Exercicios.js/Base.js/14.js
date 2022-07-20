function objetoParaArray(objeto){
    const chaves = Object.keys(objeto)
    const resultado = chaves.map((chave)=>[chave, objeto[chave]])
    return resultado 

}

    

    
console.log(objetoParaArray({
    nome: "Ana",
    sobrenome: "Luizmar",
    idade: 90}))