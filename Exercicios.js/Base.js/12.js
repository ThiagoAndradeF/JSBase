function removerPropriedade(objeto, propriedadeRemovida){
    const copia = Object.assign({}, objeto)
    delete copia[propriedadeRemovida]
    return copia

}
console.log(removerPropriedade({nome: "Ana", peso: "25kg", sobrenome: "Rodolfina"}, "sobrenome"))