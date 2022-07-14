console.log(typeof Array, typeof new Array, typeof [])
//Array é um tipo de função e a criação do array, seja com new ou de forma literal, é um object
let aprovados= new Array("Bia","Carlos", "Ana")
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//retorna undefined
//todo array é indexado

aprovados[3]= "Paulo" // ao indexar o local do array é sobrescrito
aprovados.push("Abia")//método adiciona mais um item ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)// Espaços vazios são determinados undefined

console.log(aprovados)
aprovados.sort()//Organiza array em ordem
console.log(aprovados)

delete aprovados[1]// torna o espaço 1 como undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados =["Bia", "Carlos", "Ana"]
aprovados.splice(1,1)//método splice corta e adiciona algo no index selecionado
console.log(aprovados)