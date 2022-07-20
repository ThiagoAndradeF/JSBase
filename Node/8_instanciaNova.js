const { inc } = require("./7_instanciaUnica")

module.exports = () => {
    return{
        valor:1, 
        inc(){
            this.valor++
        }
    }
}

