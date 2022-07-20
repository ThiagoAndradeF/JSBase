console.log(this === global)//f
console.log(this === module)//f

console.log(this === exports)//t
console.log(this === module.exports)//t

function logThis() {
    console.log("Dentro de uma função")
    console.log(this === exports)//f
    console.log(this === module.exports)//f
    console.log(this === global)//t
}
logThis()

const log = () =>{
    console.log("Dentro de uma arrow function")
    console.log(this === exports)//t
    console.log(this === module.exports)//t
    console.log(this === global)//f
}
log()

// fora de uma função convencional o this aponta para module.exports e dentro da função aponta para global
//logo deve-se tomar cuidado com o uso de this dentro da função, pois é algo público, pode-se ser visível fora do módulo