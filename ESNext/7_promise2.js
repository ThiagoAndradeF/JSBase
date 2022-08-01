function generateNumbersBetween(min, max, time){
    if(min>max){ [min, max] = [max,min]}
    return new Promise(resolve =>{
        setTimeout(() => {
            const factor= max - min +1  
            const random= parseInt(Math.random()*factor) + min
            resolve(random)
        }, time);
    })
}

function generateSeveralNumbers(){
    return Promise.all([
        generateNumbersBetween(1, 10, 1000),
        generateNumbersBetween(1, 15, 2000),
        generateNumbersBetween(2, 23, 3000),
        generateNumbersBetween(4, 34, 4000),
        generateNumbersBetween(25, 100, 2000),
        generateNumbersBetween(20, 12, 3000),
    ])}
    generateSeveralNumbers()
        .then(console.log)
