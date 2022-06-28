const a=1
const b=2
const c=3

const obj1={a:a, b:b, c:c} // não é mais necessário fazer isso depois do ES2015, porém ao usar : é possível atribuit um nome de instância para esses parâmetros
const obj2= {a , b, c}
console.log(obj1, obj2)// Escreve 1,2,3 

const nomeAttr="nota"
const valorAttr= 7.87

const obj3= {}
obj3[nomeAttr]= valorAttr
console.log(obj3)// possível escrever objeto dessa forma com notação literal

const obj4= {[nomeAttr]: valorAttr}// possível escrever objeto dessa forma também com notação literal

console.log(obj4)//

const obj5= {
    funcao1 :function(){
        //jeito antigo de adicionar função a objeto 
    },
    funcao2(){
        //jeito novo de adicionar função a aobjeto
    }
}
console.log(obj5)