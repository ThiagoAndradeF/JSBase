const door = 3003
const express = require('express')
const app = express()
app.get('/produtos', (req, res, next)=>{
    res.send ( {nome: 'Notebook', preco: 123.34})// converte para JSON
    //.send é usado para enviar algo , nesse caso uma resposta
    //ao user o use ao inves do get, ele aceita qualquer requisição, não so a get
})

app.listen(door, ()=> { 
    console.log(`Servidor está  executando na porta ${door}. `) 
})