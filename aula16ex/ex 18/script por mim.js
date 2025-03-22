let num = document.getElementById("fnum")
let tab = document.getElementById("flista")
let res = document.getElementById("res")
var lista = []

function clicar(){
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
    
    
    lista.push(n)
    let op = document.createElement("option")
    op.setAttribute("value", `num${n}`)
    op.text = `Valor ${Number(n)} adicionado`
    tab.appendChild(op)  
}

function finalizar(){
    if ( lista.length == 0 ){
        window.alert(`Coloque valores antes de finalizar`)
    } else {
        let soma = 0 
        for (let pas = 0; pas < lista.length; pas++){
            soma+=lista[pas]
        }
        let med = soma / lista.length
        lista.sort()
        res.innerHTML = `<p>Ao tudo, temos ${lista.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${med}</p>` 
    }
}