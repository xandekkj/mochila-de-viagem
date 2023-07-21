document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    numeroItem.innerHTML = numeroItem + nome

    const lista = document.getElementById("lista")

    lista.appendChild(novoItem)

    console.log(numeroItem)
}