// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
utilidade=(dia)=>{
switch(dia){
    case 1:case 7: 
        return "dia inválido"
        break
    case 2: case 3:case 4: case 5: case 6:
        return "dia válido"
        break
    default:
            return "dia inválido"
}
}
console.log(utilidade(2))