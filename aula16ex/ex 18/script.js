var lista = []

function clicar(){
    let num = document.getElementById("txtn")
    n = Number(num.value)
    let novo = lista.indexOf(n)

    if (num.value.length == 0){
        window.alert("Valor inválido ou já recontrado na lista")
    } else {
        if ( n > 0 && n <= 100 ){
            if (novo == -1){
                adicionar(n) 
            } else {
                window.alert("Valor inválido ou já recontrado na lista")
            }
        } else {
            window.alert("Valor inválido ou já recontrado na lista")
        }
    }

}

function adicionar(n){
    let tab = document.getElementById("txttab")
    
    lista.push(n)
    let op = document.createElement("option")
    op.setAttribute("value", `num${n}`)
    op.text = `Valor ${Number(n)} adicionado`
    tab.appendChild(op)  
}

function finalizar(){
    let res = document.getElementById("res")
    lista.sort()
    res.innerHTML = `<p>Ao tudo, temos ${lista.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
}