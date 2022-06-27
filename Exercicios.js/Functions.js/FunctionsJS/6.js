// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos
    jurosSimp=(capitalIn=0,taxaJ=0,tempo=0)=>{return(((capitalIn*(taxaJ/100))*tempo)+capitalIn).toFixed(2)}
    jurosComp=(capitalIn=0,taxaJ=0,tempo=0)=>{return(capitalIn*(1+taxaJ/100)**tempo).toFixed(2)}

console.log(jurosSimp(100,10,1))
console.log(jurosComp(100,10,1))