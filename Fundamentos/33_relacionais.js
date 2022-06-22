console.log( "01)", "1" == 1)//igual em valor
console.log( "02)", "1" === 1)//igual em valor e tipo 
console.log( "03)", "3" != 3)//diferente em valor
console.log( "04)", "3" !== 3)//diferente em valor e tipo

console.log( "05)", 3<2) 
console.log( "06)", 3>2)
console.log( "07)", 3<=2)
console.log( "08)", 3>=2)

const d1= new Date(0)
const d2= new Date(0)
console.log("09)", d1===d2)// resulta em false
console.log("10)", d1==d2)// resulta em false
console.log("11)", d1.getTime()==d2.getTime())//resulta em true

console.log("12)", undefined==null)// eles são iguais em valor (vazio)
console.log("13)", undefined===null)// é false  (eles não são igual em tipo)

