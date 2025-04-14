const data = new Date()
console.log(data)
console.log(data.getFullYear())
console.log(data.getDate())
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getMonth())

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
]

console.log('EStou no mês: ', meses[data.getMonth()])
console.log(data.getDate() + ' de ' + meses[data.getMonth()] + ' de ' + data.getFullYear())