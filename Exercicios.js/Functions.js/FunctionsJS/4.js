// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

divisao=(dividendo,divisor)=>{
    let resultado = dividendo/divisor 
    let resto= dividendo%divisor
    console.log(`O resultado da divião é ${Math.floor(resultado)}`)
    console.log(`O resto da divisão é ${resto}`)
}
divisao(30,12)