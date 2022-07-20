const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios= require('axios')

axios.get(url).then(response =>{
    const funcionarios=response.data
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const mulherChinesaPobre=funcionarios.filter(funcionario=>funcionario.pais== 'China').filter(funcionario=>funcionario.genero== 'F').reduce(menorSalario)
    console.log(mulherChinesaPobre)
})
// obter mulher chinesa com menor salário

