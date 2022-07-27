//operador.. rest(juntar)/ sprend (espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = { ativo:true, ...funcionario}//spread chamou o objeto funcionarios para a sua composição
console.log(clone)// { ativo: true, nome: 'Maria', salario: 12348.99 }

//Usar spread com array
const grupoA= ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)//[ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]