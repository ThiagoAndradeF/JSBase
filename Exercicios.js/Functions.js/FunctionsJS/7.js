// ) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

equacionar=(a,b,c)=>{
    let x1;
    let x2;
    a*(x1)**2 + b*x1 + c
    a*(x2)**2 + b*x2 + c 
    for(i=100,1<100,i++){
    if(x1+x2==-b/a && x1*x2==c/a && x1!=x2){
        return(console.log("valor de x1"+x1+"\nvalor de x2" + x2))
    }
}
}
equacionar(3,-5, 12)