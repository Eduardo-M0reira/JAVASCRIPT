


function Calcular(){
    let ini = document.getElementById("txtini")
    let fm = document.getElementById("txtfim")
    let pas = document.getElementById("txtpas")
    var res = document.getElementById("res")
    if (ini.value.length == 0 || fm.value.length == 0 || pas.value.length == 0){
        res.innerHTML = `Impossível contar!!`
        window.alert(`[ERRO] faltam dados!`)
    } else {
        var inicio = Number(ini.value)
        var fim = Number(fm.value)
        var passos = Number(pas.value)
        res.innerHTML = "Contando: <br>"

        if(passos <= 0){
            window.alert(`Passo inválido! Considerando PASSO 1`)
            passos = 1
        }
        
        if (inicio < fim){
            //Contagem crescente
            for (var c = inicio; c <= fim; c += passos){
                    res.innerHTML += `${c} \u{1F449}`
                } 
        } else {
            //contagem regressiva
            for (var c = inicio; c >= fim; c -= passos){
                res.innerHTML += `${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
