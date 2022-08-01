function workOrNot(value, chanceOfError){
    return new Promise((resolve, reject)=>{
    if(Math.random() < chanceOfError){
        reject('Ocurred a error!')
    }else{
        resolve(value)
    }
})}

workOrNot('Testing...',0.5)
    .then(v=>`Value: ${v} `)
    .then(
        v=>console.log(v)
    )
    .then(()=> console.log("Almost at the end!"))
    .catch(console.log (`General Error `))
    .then(()=> console.log("End!"))
