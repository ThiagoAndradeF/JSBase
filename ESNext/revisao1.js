//let e const 
{
    var a =2
    let b=3//está no escopo do bloco devido ao let
    console.log(b)

}

console.log(a)

//template string
const produto= 'IPad'
console.log(`${produto} é caro`) // "Ipad é caro"

//destructuring
const[l, e , ...tras] = "Cod3r"
console.log(l,e,tras)// C o ['d','3','r']

const[x, ,y]= [1,2,3]
console.log(x,y)//1 3

const{idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i,nome) // 9 Ana