const prod1 ={} //criando objeto vazio 
prod1.nome ="Celular Ultra Mega"//é possível ir adicionando atributos ao objeto, de maneira dinâmica
prod1.preco= 4988.90
prod1["DescontoLegal"] = 0.40//evitar atributos come espaço

console.log(prod1)

//é possível criar um produto já com atributos contidos nele
const prod2 = {
    nome: "Camisa polo",
    preco: 79.90
}
console.log(prod2)