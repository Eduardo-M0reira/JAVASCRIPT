
function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0)
    {
        window.alert("Por favor, digite um número")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ""
        for (var c = 1; c <= 10; c++){
            let item = document.createElement("option")
            item.text += `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}