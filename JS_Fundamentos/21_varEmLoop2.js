const funcs= []

for(var i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//Ambos resultarão em 10 (Quando i sai do loop ele sai com o seu valor pós loop)