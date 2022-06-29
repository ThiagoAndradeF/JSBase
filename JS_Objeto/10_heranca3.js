const pai = { nome: 'Pedro', corCabelo: 'preto' }// objeto chamado de pai

const filha1 = Object.create(pai)//usa Object.create(pai) para instanciar o elemento pai  do novo objeto criado (const filha1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)//recebe cor de cabelo do objeto pai 

const filha2 = Object.create(pai, {//cria objeto filho já e suas características 
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)//mostra nome de filha 
filha2.nome = 'Carla'//tenta sobrescrever nome de filha, porém devido ao writable:false, não consegue
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)//"Bia tem cabelo preto"

console.log(Object.keys(filha1))//mostra apenas os atributos que estão apenas no objeto criado
console.log(Object.keys(filha2))

for(let key in filha2) {// criar laço forin para percorrer todas as keys do objeto filha 
    filha2.hasOwnProperty(key) ? /// Verifica se o objeto recebe alguma chave(atributo) por herança, se sim executa o código abaixo 
        console.log(key) : console.log(`Por herança: ${key}`)
}