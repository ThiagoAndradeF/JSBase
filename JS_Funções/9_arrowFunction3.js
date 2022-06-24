let comparaComThis = function (param) {
    console.log(this === param)
}

console.log("1") + comparaComThis(global)//true, o this que se referencia em functions comuns é o mesmo
//this do global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
console.log("2") +comparaComThis(global)//false, pois o bind fixou o this no obj
console.log("3") +comparaComThis(obj)//true, pois o bind fixou o this no obj

let comparaComThisArrow = param => console.log(this === param)
console.log("4") +comparaComThisArrow(global)//false, pois a função arrow fixa o 
//this no próprio módulo da função
console.log("5") +comparaComThisArrow(module.exports)//true

comparaComThisArrow = comparaComThisArrow.bind(obj)
console.log("6") +comparaComThisArrow(obj)//false, pois a função arrow é mais forte que o bind
console.log("7") +comparaComThisArrow(module.exports)// true