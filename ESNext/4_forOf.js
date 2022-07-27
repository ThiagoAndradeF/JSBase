for (let letra of "Cod3r") {
    console.log(letra)//separará letra por letra
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)//separará termo por termo
}

for (let assunto of assuntosEcma) {
    console.log(assunto)//separará conjunto chave e valor por vez
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)//separará assuntos 'Map' 'Set' 'Promise '
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)//separará chaves
}

for (let valor of assuntosMap.values()) {
    console.log(valor)//separará valores
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)//separa conjuntos chave e valor
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra) //separa cada letra 
}