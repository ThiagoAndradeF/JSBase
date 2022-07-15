Salario = function(horasTrabalhadas,valorHora){
    let valorFinal=(horasTrabalhadas*valorHora).toFixed(2).toString().replace("." , ",")
    console.log("Salário iguao a R$ "+ valorFinal)
}

Salario(20,30.5)