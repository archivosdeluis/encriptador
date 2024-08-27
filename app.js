const textarea= document.querySelector(".main__texto");
const mensaje= document.querySelector(".lado__derecho__texto");

const botonCopiar = document.querySelector(".lado__derecho__boton");
const textoArea = document.querySelector(".lado__derecho__texto");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnencriptar() {
    const textoencriptado = encriptar(textarea.value);
    mensaje.value = textoencriptado;
    textarea.value = "";
    const imagen = document.querySelector(".lado__derecho__imagen");
    imagen.style.display = "none";
    const titulo = document.querySelector("h1");
    titulo.style.display = "none";
    const parrafo = document.querySelector(".lado__derecho__parrafo");
    parrafo.style.display = "none";
}


function encriptar(stringencriptado) {
let matrizcodigo= [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
stringencriptado=stringencriptado.toLowerCase()


for(let i=0; i<matrizcodigo.length; i++) {
    if(stringencriptado.includes(matrizcodigo[i][0])) {
        stringencriptado=stringencriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
    }
}
return stringencriptado;
}


function btndesencriptar() {
    const textoencriptado = desencriptar(textarea.value);
    mensaje.value = textoencriptado;
    textarea.value = "";
}


function desencriptar(stringdesencriptado) {
    let matrizcodigo= [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringdesencriptado=stringdesencriptado.toLowerCase()
    
    
    for(let i=0; i<matrizcodigo.length; i++) {
        if(stringdesencriptado.includes(matrizcodigo[i][1])) {
            stringdesencriptado=stringdesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
    }
    return stringdesencriptado;
    }


function btncopiar() {
    textoArea.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");

}