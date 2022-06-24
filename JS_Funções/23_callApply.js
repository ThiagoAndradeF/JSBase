function getPreco(imposto=0, moeda="R$"){
    return `${moeda} ${this.preco* (1- this.desconto)*(1+imposto)}`
}

const produto={
    nome:"notebook",
    preco:5000,
    desconto:0.2,
    imposto:0.1,
    getPreco
}
global.preco= 20
global.desconto= 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro= {preco: 100000, desconto:0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17,"$"))//por parâmetro voce escolhe de onde virá os parâmetros dos próximos parâmetros que serão determinado
console.log(getPreco.apply(carro, [0.17, "$"]))//mesma coisa que call, porém os parâmetros do item ficam dentro da array

