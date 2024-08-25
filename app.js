document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('campo__resultado__copiar').style.display = 'none'; 
});

// Función para limpiar el campo y restablecer el placeholder
function limpiarCampo(){
    let textarea = document.getElementById("encriptador");
    textarea.value = "";  // Limpia el contenido del textarea
    textarea.placeholder = "Ingrese el texto aquí";  // Restablece el placeholder
}

// Función para encriptar el texto
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para detectar mayúsculas y acentos, y mostrar un mensaje de error si es necesario
function depurarEntrada(texto){
    let tieneMayusculas = /[A-Z]/.test(texto);
    let tieneAcentos = /[ÁÉÍÓÚáéíóúàèìòùâêîôûãõñ]/.test(texto);
    let campo_encriptado = document.getElementById("campo__resultado__texto");

    if (tieneMayusculas || tieneAcentos) {
        campo_encriptado.textContent = "No puedes ingresar mayúsculas o acentos";
        document.getElementById('campo__resultado__copiar').setAttribute('disabled', true);
        return false; // Indica que la entrada es inválida
    } else {
        campo_encriptado.textContent = ""; // Limpiar el mensaje de error si es válido
        return true; // Indica que la entrada es válida
    }
}

// Función para encriptar el texto y mostrar el resultado en la pantalla
function encriptarTexto() {
    let texto = document.getElementById("encriptador").value;

    if (!depurarEntrada(texto)) {
        return;
    }

    let campo_encriptado = document.getElementById("campo__resultado__texto");
    let textoEncriptado = encriptar(texto);

    if (textoEncriptado) {
        campo_encriptado.textContent = textoEncriptado;
        document.getElementById('campo__resultado__copiar').style.display = 'block';
        document.getElementById('imagenMuñeco').style.display = 'none'
        document.getElementById('campo__resultado__leyenda1').style.display = 'none';
        document.getElementById('campo__resultado__leyenda2').style.display = 'none';
    } else {
        document.getElementById('campo__resultado__copiar').style.display = 'none';
        document.getElementById('imagenMuñeco').style.display = 'block';
        document.getElementById('campo__resultado__leyenda1').style.display = 'block';
        document.getElementById('campo__resultado__leyenda2').style.display = 'block';
    }

    limpiarCampo();
}

// Función para desencriptar el texto y mostrar el resultado en la pantalla
function desencriptarTexto() {
    let texto = document.getElementById("encriptador").value;

    if (!depurarEntrada(texto)) {
        return;
    }

    let campo_encriptado = document.getElementById("campo__resultado__texto");
    let textoDesencriptado = desencriptar(texto);

    if (textoDesencriptado) {
        campo_encriptado.textContent = textoDesencriptado;
        document.getElementById('campo__resultado__copiar').style.display = 'block';
        document.getElementById('imagenMuñeco').style.display = 'none'
        document.getElementById('campo__resultado__leyenda1').style.display = 'none';
        document.getElementById('campo__resultado__leyenda2').style.display = 'none';
    } else {
        document.getElementById('campo__resultado__copiar').style.display = 'none';
        document.getElementById('imagenMuñeco').style.display = 'block';
        document.getElementById('campo__resultado__leyenda1').style.display = 'block';
        document.getElementById('campo__resultado__leyenda2').style.display = 'block';
    }

    limpiarCampo();
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiarTexto() {
    let campoTexto = document.getElementById("campo__resultado__texto");

    let range = document.createRange();
    range.selectNodeContents(campoTexto);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    navigator.clipboard.writeText(campoTexto.textContent);
}
