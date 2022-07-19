
function removerPropriedade(objeto, propriedadeRemovida){
    const copia= Object.assign({},objeto)
    delete copia[propriedadeRemovida]
    return copia
}