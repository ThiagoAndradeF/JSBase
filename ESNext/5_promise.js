function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) //responde à resolve
    .then(outraFrase => console.log(outraFrase))//responde à resolve
    .catch(e => console.log(e))//responde/trata à reject