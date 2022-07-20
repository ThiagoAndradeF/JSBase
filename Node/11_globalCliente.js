require ( "./10_global")

console.log(MinhaApp.saudacao())
MinhaApp.nome= "alanzoca" /// não pode mudar devivo o Object.freeze
console.log(MinhaApp.nome)