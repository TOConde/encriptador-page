/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 
document.getElementById("munieco").style.display = ""
document.getElementById("mensajeNoEncontrado").style.display = ""
document.getElementById("textoEncriptado").style.display = "none"
document.getElementById("btnCopiar").style.display = "none"



function encriptar() {    

    var texto = document.getElementById('textoIngresado').value
    texto = texto.toLowerCase()
    texto = texto.replace(/e/g, "enter")
    texto = texto.replace(/i/g, "imes")
    texto = texto.replace(/a/g, "ai")
    texto = texto.replace(/o/g, "ober")
    texto = texto.replace(/u/g, "ufat")
    document.getElementById('textoEncriptado').value = texto

}

function desEncriptar() {

    var texto = document.getElementById('textoIngresado').value
    texto = texto.toLowerCase()
    texto = texto.replace(/enter/g, "e")
    texto = texto.replace(/imes/g, "i")
    texto = texto.replace(/ai/g, "a")
    texto = texto.replace(/ober/g, "o")
    texto = texto.replace(/ufat/g, "u")
    document.getElementById('textoEncriptado').value = texto

}

function deleteMunieco() {

    if (document.getElementById('textoIngresado').value != '') {

        document.getElementById("munieco").style.display = "none"
        document.getElementById("mensajeNoEncontrado").style.display = "none"
        document.getElementById("btnCopiar").style.display = ""

    } else {

        document.getElementById("munieco").style.display = ""
        document.getElementById("mensajeNoEncontrado").style.display = ""
        document.getElementById("btnCopiar").style.display = "none"
    }
    
}

function addTextArea() {

    if (document.getElementById('textoIngresado').value != '') {

        document.getElementById("textoEncriptado").style.display = ""

    } else {

        document.getElementById("textoEncriptado").style.display = "none"

    }

}

function encriptBoton() {
    btnEncriptar.addEventListener("click", encriptar)
    btnEncriptar.addEventListener("click", deleteMunieco)
    btnEncriptar.addEventListener("click", addTextArea)
}

function desEncriptBoton() {
    btnDesencriptar.addEventListener("click", desEncriptar)
    btnDesencriptar.addEventListener("click", deleteMunieco)
    btnDesencriptar.addEventListener("click", addTextArea)
}

function copiar() {

    var copyText = document.getElementById('textoEncriptado').value
    navigator.clipboard.writeText(copyText)    

}

document.querySelector("#btnEncriptar")
document.querySelector("#btnDesencriptar")
document.querySelector("#btnCopiar")

btnCopiar.addEventListener("click",copiar)

encriptBoton()
desEncriptBoton()

