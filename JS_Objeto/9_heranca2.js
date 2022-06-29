//Cadeia de protótipos(prototype chain)
Object.prototype.attr0 ="0"// não faça isso em casa!! mexe come escopo global

const avo = { attr1: 'A' } // avô só recebe de object.prototype 
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }//pai receve atributo de avô
const filho = { __proto__: pai, attr3: 'C' }//filho receve de pai e avô, dando prioridade para os próprios atributos
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = { // criação de objeto "carro"
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, sombreamento, sobrescreve velocidade máxima vinda do pai 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//uma função dentro de carro
    }
}

Object.setPrototypeOf(ferrari, carro)//transforma ferrari em herdeiro de carro
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)//determina aceleração de volvo
console.log(volvo.status()) 

ferrari.acelerarMais(324)//determina aceleração de ferrari
console.log(ferrari.status())