
const valores = [7.7, 8.9 , 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

//é possível declarar novas posições em um array
valores[4]=10
console.log(valores)
console.log(valores.length) //visualizar tamanho do array

//é possível adicionar multiplos de valores ao mesmo tempo
valores.push({id: 3}, false , null ,'teste')
console.log(valores)


console.log(valores.pop())//retorna ultimo elemento do array
delete valores[0]/// deleta o elemento de índice 0 do array
console.log(valores) 


console.log(typeof valores) //Array é tipo objeto
