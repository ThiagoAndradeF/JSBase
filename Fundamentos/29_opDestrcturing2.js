const[a]=[10] // atribuição de valor por destruction
console.log(a)

const[n1, ,n3, ,n5,n6=0] = [10,7,9,8] //Atribui n variáveis usando uma única atribuição
console.log(n1,n3,n5,n6) 

const[ , [ ,nota]] = [[ ,8,8],[9,6,8]]
console.log(nota)

//Em array, o Destruturing é muito usado como operador de atribuição como vemos acima