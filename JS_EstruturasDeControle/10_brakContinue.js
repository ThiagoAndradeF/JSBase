const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x==5){
        break //para quando o x chega em 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y==5){
        continue //pula quando o y é igual a 5
    }
    console.log(`${y}  = ${nums[y]}` )

}

externo: //Rótulo para chamar esse for de fora
for(a in nums){
    for(b in nums){
        if(a==2 && b==3) break externo // referenciar o rótulo
        console.log(`Par = ${a}, ${b}`)
    }
}