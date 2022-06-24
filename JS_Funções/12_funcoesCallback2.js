const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1=[]
for(let i in notas){ // uso de um for in para percorrer array
    if(notas[i]<7){ // se a nota com índice i se encaixar nesse parâmetro
        notasBaixas1.push(notas[i])//é adicionado a array notasBaixas essa nota
    }
}
console.log(notasBaixas1)
//com callback
const notasBaixas2=notas.filter(function(nota){
    return nota<7//esse notas.filter filtra o array notas e cria um outro, que seria esse anterior porém filtrado pela function 
})
console.log(notasBaixas2)

const notasMenorQue7= nota=>nota<7 
const notasBaixas3= notas.filter(notasMenorQue7)// mesma coisa que a de cima porém usando arrow function
console.log(notasBaixas3)
