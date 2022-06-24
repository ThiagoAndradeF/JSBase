function criarPessoa(nome , sobrenome){
    return{
        nome, 
        sobrenome
    }
}

const thiago = criarPessoa("Thiago","Andrade")

console.log(thiago)