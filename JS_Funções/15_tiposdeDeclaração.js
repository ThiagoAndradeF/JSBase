console.log(soma(3,4)) // pode-se chamar a função antes de setala, se a dunction for declarada como function declaration
//function declaration
function soma(x,y){
    return x+y
}

//function expression
const sub= function(x,y){
    return x-y
}
console.log(sub(3,4))

//named function expression (menos usada que as outras)
const mult = function mult(x,y){
    return x*y
}
console.log(mult(3,4))