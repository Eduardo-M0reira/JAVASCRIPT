
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("textano")
    var res = window.document.querySelector("div#res")
    if ( fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verificar os dados e teste novamente!")
    } else {
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute("src", "H-bebe.jpg")
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'H-ado.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'H-adulto.jpg')
            } else {
               //idoso 
               img.setAttribute('src', 'H-velho.jpg')
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'M-bebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'M-ado.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'M-adulto.jpg')
            } else {
               //idoso
               img.setAttribute('src', 'M-velha.jpg') 
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}