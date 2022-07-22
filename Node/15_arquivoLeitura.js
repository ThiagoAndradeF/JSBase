const fs = require('fs')

const caminho= __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono :::preferencial 
fs.readFile(caminho, 'utf-8',(err,conteudo)=>{
    const config= JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})//ler arquivo usando callback quando o arquivo for carregado 

const config = require("./arquivo.json") 
console.log(config.db) //ler arquivo criando instância do próprio módulo, já transformando o arquivo JSON em objeto  


//ler conteúdo da pasta
fs.readdir(__dirname, ( err,arquivos)=>{
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})