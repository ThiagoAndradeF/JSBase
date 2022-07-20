//console.log(global)
global.MinhaApp = Object.freeze( {  //padrão é usar sistema de módulos
    saudacao(){
        return "Ola Meu fi"
    }, 
    nome: "Sistema " //pode-se usar Object.freeze para congelar a informação 
})//usa-se global em exceções