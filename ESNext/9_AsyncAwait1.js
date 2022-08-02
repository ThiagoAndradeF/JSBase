function  waitFor(time =2000){
    return new Promise(resolve => setTimeout(resolve, time)); 
}


function returnValue(){
    return new Promise(resolve => setTimeout(()=> resolve(10),5000))
}

async function execute(){
    let value= await returnValue();

    await waitFor(1500)
    console.log(`Async/Await: ${value}...`)
    
    await waitFor(1500)
    console.log(`Async/Await: ${value+ 1}...`)
    
    await waitFor(1500)
    console.log(`Async/Await: ${value+ 2}...`)

    return value + 3
}

async function executeInTruth(){
    const value = await execute()
    console.log(value)
}

executeInTruth()