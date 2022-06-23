{
    {
        {
            {
                var sera="Seraaa???"
                console.log(sera)
            }
        }
    }
}
console.log(sera)
//Prova que var não tem escopo de bloco, diferente do let
function teste(){
    var local=123
    console.log(local)
}

teste()
//console.log(local) não funciona, devido ao escopo de var que é a function