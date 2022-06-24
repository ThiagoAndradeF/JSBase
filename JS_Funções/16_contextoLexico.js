const valor ="Global"

function minhaFuncao(){
    console.log(valor)
}
function exec(){
    const valor= "Local"
    minhaFuncao() //apesar dessa função chamar uma constante que existe nessa instância local,  ela foi declarada no global, logo chama a variável correspondente ao escopo global
}
exec() 