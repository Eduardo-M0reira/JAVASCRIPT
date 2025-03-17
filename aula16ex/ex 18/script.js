
function clicar(){
    let num = document.getElementById("txtn")
    adicionar(num.value)
}

function adicionar(n){
    var lista = []
    let tab = document.getElementById("txttab")
    let rep = "novo"
    for (let c = 0; c <= lista.length; c++){
         if (n == lista[c]){
            rep = "tem"
        }
    }
    if (rep == "novo"){
        lista.push(n)
        let op = document.createElement("option")
        op.setAttribute("value", `num${n}`)
        op.text = `Valor ${Number(n)} adicionado`
        console.log(n)
        tab.appendChild(op)  
    } else {
        console.log("noa vai")
    }
}