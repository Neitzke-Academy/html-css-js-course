function mostraAlerta(){
    alert('Clicou no botao')
}

function mudaCor(cor){
    document.querySelector('body').style.backgroundColor = cor
}

function mudaTitulo(){
    var texto = document.querySelector('input').value
    var titulo = document.querySelector('#titulo')
    titulo.textContent = texto
}

var titulo = document.querySelector('#titulo')
titulo.addEventListener("mouseover", () => {
    mudaCor('green')
})
