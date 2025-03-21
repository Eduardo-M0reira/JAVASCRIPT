var lista = []

function clicar(){
    let num = document.getElementById("txtn")
    n = Number(num.value)
    let novo = lista.indexOf(n)

    if (num.length == 0){
        window.alert("Valor inválido ou já recontrado na lista")
    } else {
        
    }

    if (novo == -1){
       adicionar(n) 
    }
    else {
        window.alert("Valor inválido ou já recontrado na lista")
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
    let res = document.getElementById("txttab")
    res.innerHTML = "ola"
}