function tratarErroELancar(erro) {
    //throw new Error("")
    //throw 10
    //throw true
    //throw "mensagem"
    //Funcao chama throw(mensagem de erro)
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}
function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase()+ "!!!")
        //trecho de código que pode dar problema
    } catch (e) {
        tratarErroELancar(e)//catch chama função tratarErroLancer(e)
    } finally { //mesmo se não der erro, finally é chamado no final 
        console.log("final")
    }
}
const obj = { nome: "Roberto" }
imprimirNomeGritando(obj) 