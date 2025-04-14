// function alo(){
//     console.log('deu certo')
// }

// setTimeout(alo, 2000)
// setInterval(alo, 1000)

var tempo = 10
var timer = setInterval(() => {
    console.log(tempo)
    tempo--
    if(tempo == 0){
        clearInterval(timer)
    }
}, 1000)


