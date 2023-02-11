const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".textarea").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptador(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage= "none"
        textArea.value = "";
        copia.style.display = "block"
    }
}

function encriptador(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function desencriptar(){
    const textoEncriptado = desencriptador(textArea.value)
    mensaje.style.backgroundImage= "none"
    mensaje.value = textoEncriptado
    textArea.value = "";
    copia.style.display = "block"
    
}

function desencriptador(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let e = 0; e < matrizCodigo.length; e++){
        if(stringDesencriptada.includes(matrizCodigo[e][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[e][1] , matrizCodigo[e][0])

        }

    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}