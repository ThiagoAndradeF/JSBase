const fs = require('fs')
const path = require('path')
const way = path.join(__dirname, 'dados.txt')

function readText(way){
    return new Promise(resolve => { 
        fs.readFile(way, function(_, content){
            resolve(content.toString())
        })
        console.log("Executed before")
    })
}
readText(way)
    .then(content => content.split('\n'))
    .then(lines => lines.join(','))
    .then(content=> `O valor final é: \n ${content}`)
    .then(console.log)