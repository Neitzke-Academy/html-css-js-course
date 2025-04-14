// for(let i = 1; i <= 1000; i++){
//     console.log(i*10)
// }

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// Quantas pessoas são maiores de idade
const users = [
    {id: 1, nome: 'Gustavo', idade: 22},
    {id: 2, nome: 'Marcos', idade: 20},
    {id: 3, nome: 'Júnior', idade: 1},
    {id: 4, nome: 'Alef', idade: 59},
    {id: 5, nome: 'Neri', idade: 16},
    {id: 6, nome: 'Ariel', idade: 12},
    {id: 7, nome: 'Junes', idade: 10},
    {id: 8, nome: 'Matheus', idade: 29},
    {id: 9, nome: 'Arthur', idade: 89},
    {id: 10, nome: 'Lisiane', idade: 5}
]

var quantidadeMaiorIdade = 0

for(let i = 0; i < users.length; i++){
    if(users[i].idade >= 18){
        quantidadeMaiorIdade++
    }
}

console.log(quantidadeMaiorIdade)
