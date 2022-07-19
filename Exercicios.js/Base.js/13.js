function somenteNumero(array){
    return array.filter(elemento=> typeof elemento== "number")   
}
console.log(somenteNumero([10,20,"nunu"]))