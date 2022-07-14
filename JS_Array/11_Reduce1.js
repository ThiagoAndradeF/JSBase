const alunos = [
    {nome: "João", nota: 7.3, bolsista:false},
    {nome: "Maria", nota: 9.3, bolsista:true},
    {nome: "Ana", nota: 9.2, bolsista:false},
    {nome: "Antonio", nota: 9.5, bolsista:false}
]
Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

console.log(alunos.map(a=> a.nota))
const resultados = alunos.map(a=> a.nota).reduce2(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual},0)

console.log(resultados)