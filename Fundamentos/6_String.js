const escola= "Cod3r"

//seleciona texto
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//transforma caractere selecionado em asci
console.log(escola.indexOf(3))// mostra índice do item selecionado 

//Exclui caracteres da string selecionada
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// edita o texto
console.log("Escola" + escola + "!")
console.log("Escola" .concat (escola) .concat ("!"))
console.log(escola.replace(3, "e"))



// transforma cada item em um item de string 
console.log("Ana, Maria, Pedro" .split(","))