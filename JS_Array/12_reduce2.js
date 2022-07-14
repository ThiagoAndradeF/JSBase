const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
//Desafio1:Todos os alunos são bolsistas?
const bolsa = aluno => aluno.bolsista

todosBolsistas= function(acumulador,atual){ 
    return (acumulador*atual)
}
algumBolsista= function(acumulador,atual){
    return (acumulador+atual)
}
const resultado= alunos.map(bolsa).reduce(todosBolsistas) 
const resultado2= alunos.map(bolsa).reduce(algumBolsista)

console.log(!!resultado)
console.log(!!resultado2)
