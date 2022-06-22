function rand({min =0, max=1000}){
    const valor = Math.random()*(max-min) + min
    return Math.floor(valor)
} //nesse caso o Destruct foi usado como forma de criação de um pseudo-objeto
//que define as variáveis min e max, dentro da function, dando até valores padrão para elas
const obj= {max: 50,  min:40} // sendo possível instanciar com o uso de {min e max}
console.log(rand(obj)) 
console.log(rand({min: 955}))
console.log(rand({}))
// console.log(rand()// não funciona, pois não atribuiu valores para a função
