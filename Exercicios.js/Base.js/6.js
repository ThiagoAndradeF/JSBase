inverso=valor=>{
   let tipoNumero= typeof valor;
   if(tipoNumero == "boolean"){
        if(valor==true){
            valor==false
        }else{valor==true}
    }else if(tipoNumero == "number" ){
        valor *=(-1)
    }else{
        return "booleano ou número esperados, mas o parâmetro é do tipo  "+ typeof valor
    }
    return valor
}

console.log(inverso("Abracadabra"))