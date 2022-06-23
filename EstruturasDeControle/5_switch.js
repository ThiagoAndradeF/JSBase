const imprimirResultado= function(nota){
    switch(Math.floor(nota)){//Math.floor transforma a nota em número inteiro, para 
        // se conectar com algum case 
        case 10:
        case 9: ///tanto faz o case estar encima ou do lado do outro case
        //o importante é o break
            console.log("Quadro de honra")
        break
        case 8:case 7:
            console.log("Aprovado")
        break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:// se não for nenhuma das outras
            console.log("Valor inválido")
    }
}
imprimirResultado(10 ) 
imprimirResultado(8.9 ) 
imprimirResultado(6.55 ) 
imprimirResultado(3) 
imprimirResultado(-1 ) 
imprimirResultado(11 ) 