var lista = []

function clicar(){
    let num = document.getElementById("txtn")
    n = Number(num.value)
    let novo = lista.indexOf(n)

    if (novo == -1){
       adicionar(n) 
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