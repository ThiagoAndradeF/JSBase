Array.prototype.filter2 = function(callback){
    const newArray=[]
    for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    {nome: "Notebook", preco:2500, fragil:true}
    ,{nome: "Ipad Pro", preco:4500, fragil:true}
    ,{nome: "Copo Plástico", preco:20, fragil:false}
    ,{nome: "Copo Vidro", preco:15, fragil:true}
]

const caro=produto=>produto.preco>=2500
const naoDuravel=produto=>produto.fragil //==true

console.log(produtos.filter2(caro).filter2(naoDuravel))