const ferrari={
    modelo: "F40",
    velMax: 324
}

const volvo={
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.prototype)// retorna undefined objetos não tem atributos prototype por padrão 
console.log(ferrari.__proto__)// retorna um objeto com prototype vazio // {}
console.log(ferrari.__proto__===Object.prototype)// retorna true 
console.log(volvo.__proto__===Object.prototype)//retorna true 
console.log(Object.prototype.__proto__ === null)//retorna true, pois o prórprio Object.prototype não retorna nada (null)


function MeuObjeto(){}
    console.log(typeof Object, typeof MeuObjeto) () // retonr function, pois todo object é uma function
    console.log(Object.prototype, MeuObjeto.prototype)// objeto prototype  vazio 