var txtin = document.getElementById("txtini")
var txtfm = document.getElementById("txtfim")
var txtps = document.getElementById("txtpas")


function Calcular(){
    var p1 = document.getElementById("res")
    var inicio = Number(txtin.value)
    var fim = Number(txtfm.value)
    var passos = Number(txtps.value)
    p1.innerHTML = " "

    if(passos == 0){
        window.alert(`Passo inválido! Considerando PASSO 1`)
        passos = 1
    }
    
    if (inicio < fim){
       for (var c = inicio; c <= fim; c+=passos){
            p1.innerHTML += `${c} &#x1F449`
            if ( c >= fim){
                p1.innerHTML += `&#x1F3C1`
            }
        } 
    } else {
        for (var c = inicio; c >= fim; c-=passos){
            p1.innerHTML += `${c} &#x1F449`
            if ( c <= fim){
                p1.innerHTML += `&#x1F3C1`
            }
        } 
    }
    
}
