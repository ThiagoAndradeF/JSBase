function generateRandomNumbersBetween(min, max, forbiddenNumbers){
    if(min>max) [max, min]= [min, max]
    return new Promise((resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random()*factor)+min  
        if(forbiddenNumbers.includes(random)){
            reject('Repeated numbers')} else {
                resolve(random)
            } 
    })
}


async function generateMegaSena(numberOfNumbers, attempts) {
    try{
        const numbersMega = [] 
        for (let _ of Array (numberOfNumbers).fill()){
            numbersMega.push (await generateRandomNumbersBetween(1, 60, numbersMega))}
            return numbersMega
        }
    catch(e){
        if(attempts> 100){
            throw "Didn't work"
        }else{
            return generateMegaSena(numberOfNumbers,attempts+1)
        }
    }
}

generateMegaSena(25)
    .then(console.log)
    .catch(console.log)