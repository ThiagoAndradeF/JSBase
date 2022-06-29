const sequencia={
    _valor:1,
    get valor(){return this._valor++},//function para retornar valor e adicionar 1 
    set valor(valor){//atribuir valor a valor
        if(valor>this.valor){//dar condicional que se o valor passado for menos que o valor atual, o valor da sequência continua o anterior, não sendo sobrescrito e com isso apenas o método set sendo executado
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)//executa certo
sequencia.valor = 1000//executa certo
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 2000//executa certo
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900//não executa certo
console.log(sequencia.valor, sequencia.valor)