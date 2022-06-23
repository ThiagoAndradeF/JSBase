let contador= 1
while (contador<=10){
    console.log(`contador = ${contador}`)
    contador++
}// percorrendo numeros de 1 a 10 com while

for(let i=1; i<=10; i++){
    console.log(`i= ${i}`)
}//percorrendo numeros de 1 a 10 com for

const notas= [6.7, 7.4, 9.8 , 8.1, 7.7]
for (let i=0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
} // percorrendo a array