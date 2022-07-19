const moduloA= require('../../1_moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')//'../../../node_modules/saudacao' // é também possível acessar apenas usando o nome do modulo, que será acessado, mesmo sem o caminho relativo
console.log(saudacao.ola)


const c = require('./pastaC')
console.log(c.ola2)//pode-se também referenciar arquivos dentro da mesma pasta, que será referenciado o index.js

const http= require('http')
http.createServer((req, res) => {
    res.write("Bom Dia!")
    res.end()
}).listen(8080) //pode-se também usar chamar por require os próprios protocolos do node