const funcs=[]

for(let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[4]()
funcs[9]()

//Usando o Let, resulta em 4 e 9, valores de i na function naquele momento selecionado

