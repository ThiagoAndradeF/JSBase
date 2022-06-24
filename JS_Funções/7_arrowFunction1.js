let dobro = function (a) {
  return a * 2
} // function comum
dobro = (a) => {
  return a * 2
} //arrow function
dobro = (a) => a * 2 //arrow function 2

console.log(dobro(Math.PI))

let ola = function(){
    return "ola"
}
ola = () => "ola"
ola = _ => "ola" // possui um param
console.log(ola())