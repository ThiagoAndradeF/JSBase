const fabricantes= ["Merceder", "Audi", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)//Usa o evento de percorrer como forEach, para iniciar a ação de escrever os itens do array e seu  índice no array+1
fabricantes.forEach(fabricantes=>console.log(fabricantes))//Usa o evento de percorrer com forEach, para escrever os itens do array