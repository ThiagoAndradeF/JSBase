const nome ="Rebeca"
const concatenacao= "Olá" + nome + "!"
const template =`
    Olá
    ${nome}!` //usa-se crase para uso do tamplate, aceita-se no tamplate quebra de linha 
    console.log(concatenacao, template)
    //Expressões...
    console.log(`1 + 1= ${1+1}`)

    const up= texto => texto.toUpperCase()
    
    console.log(`Ei... ${up("cuidado")}!`)

