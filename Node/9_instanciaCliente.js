const contadorA = require('./7_instanciaUnica')
const contadorB = require('./7_instanciaUnica')


const contadorC = require('./8_instanciaNova')()
const contadorD = require('./8_instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor +" "+ contadorA.valor)


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor +" "+ contadorD.valor)