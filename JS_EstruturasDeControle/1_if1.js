function soBoaNoticia(nota){
    if(nota >=7){
        console.log("Aprovado com " + nota)
    }
}
soBoaNoticia(8.1)//mostra o texto "Aprovado com nota 8.1"
soBoaNoticia(6.1)//Não mostra nada

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("É verdade... " + valor +"..."+ typeof valor )
    }
}
seForVerdadeEuFalo()//f
seForVerdadeEuFalo(null)//f
seForVerdadeEuFalo(undefined)//f
seForVerdadeEuFalo(NaN)//f
seForVerdadeEuFalo('')//f
seForVerdadeEuFalo(0)//f
seForVerdadeEuFalo(-1)//t
seForVerdadeEuFalo(' ')//t
seForVerdadeEuFalo('?')//t
seForVerdadeEuFalo([])//t
seForVerdadeEuFalo([1,2])//t
seForVerdadeEuFalo({})//t
