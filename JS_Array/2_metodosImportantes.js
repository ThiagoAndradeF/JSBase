const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // tira o ultimo item do array
console.log(pilotos)

pilotos.push('Verstappen')// adiciona à ultima posição
console.log(pilotos)

pilotos.shift()//remove o primeiro !
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona à primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')// nesse caso por exemplo adicionou esses dois itens ao index 2, sem remover nada 
console.log(pilotos)

// remover
pilotos.splice(3, 1) // tira o item de index 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria novo array com os elementos a partir do índice 2  
console.log(algunsPilotos1) 

const algunsPilotos2 = pilotos.slice(1, 4)// cria um novo array com os elementos de índice 1 à 3
console.log(algunsPilotos2)