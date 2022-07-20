const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios= require('axios')

axios.get(url).then(response =>{
    const funcionarios=response.data
    const menorSalario= (salarioAtual,salarioAnterior)=>{
        if(salarioAtual.salario<salarioAnterior.salario){
            return salarioAtual
        }else{
            return salarioAnterior
        }
    }
    const chines = (f) => f.pais=== "China"
    const mulher = (f) => f.genero=== "F"
    const mulherChinesaPobre = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)

    console.log(mulherChinesaPobre)
})
// obter mulher chinesa com menor salário

