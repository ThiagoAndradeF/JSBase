function MeuObjeto() {}//cria function construtora vazia
console.log(MeuObjeto.prototype)//retorna um objeto vazio 

const obj1 = new MeuObjeto//cria objetos a partir da função construtora 
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)// retorna true, pois se foram criados a partir da mesma função construtora,o atributo prototype aponta para o mesmo lugar em ambos(o atributo protótipo da função) 
console.log(MeuObjeto.prototype === obj1.__proto__)//apontam para o atributo protótipo da função

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()// executa a função falar 
obj2.nome = 'Rafael'
obj2.falar()//executa a função falar trocando o nome

//ao apontar o proto do objeto para o mesmo que da função construtora, é recebido os atributos da função construtora
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)//true
console.log(MeuObjeto.__proto__ === Function.prototype)//true
console.log(Function.prototype.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === null)//true