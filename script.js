//Variables
let textoIngresado = "";
let textoEncriptado = "";
let textoDesencriptado = "";

function encriptarTexto(){
    textoIngresado = document.getElementById("campoIngresoDatos").value;
    // console.log(textoIngresado);
    textoEncriptado = "";
    let validacion = validarTexto(textoIngresado);
    if(validacion){
        for(let x = 0; x < textoIngresado.length; x++){
            if(textoIngresado[x] == "a"){
                textoEncriptado += "ai";
            }else if(textoIngresado[x] == "e"){
                textoEncriptado += "enter";
            }else if(textoIngresado[x] == "i"){
                textoEncriptado += "imes";
            }else if(textoIngresado[x] == "o"){
                textoEncriptado += "ober";
            }else if(textoIngresado[x] == "u"){
                textoEncriptado += "ufat";
            }else{
                textoEncriptado += textoIngresado[x];
            }
        }
        // console.log(textoEncriptado);
        document.getElementById("mensajeEncontrado").querySelector("p").innerText = textoEncriptado;
        document.getElementById("mensajeNoEncontrado").style.display = "none";
        document.getElementById("mensajeEncontrado").style.display = "flex";
    }
}
function desencriptarTexto(){
    textoIngresado = document.getElementById("campoIngresoDatos").value;
    // console.log(textoIngresado);
    textoDesencriptado = "";
    let validacion = validarTexto(textoIngresado);
    if(validacion){
        textoDesencriptado = textoIngresado.replaceAll("ai", "a");
        textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
        textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
        textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
        textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
        // console.log(textoDesencriptado);
        document.getElementById("mensajeEncontrado").querySelector("p").innerText = textoDesencriptado;
        document.getElementById("mensajeNoEncontrado").style.display = "none";
        document.getElementById("mensajeEncontrado").style.display = "flex";
    }
}
function copiarTexto(){
    navigator.clipboard.writeText(document.getElementById("mensajeEncontrado").querySelector("p").innerText);
}
function validarTexto(texto) {
    const regex = /^[a-z ]+$/;
    if (regex.test(texto)) {
        return true;
    } else {
        return false;
    }
}
function ocultarResultado(){
    document.getElementById("mensajeEncontrado").querySelector("p").innerText = "";
    document.getElementById("mensajeEncontrado").style.display = "none";
    document.getElementById("mensajeNoEncontrado").style.display = "flex";
}