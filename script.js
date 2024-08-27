function encriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    let noEncontrado = document.getElementById("noEncontrado");
    let mensaje = document.getElementById("mensaje");
    let instruccion = document.getElementById("instruccion");
    let botonCopiar = document.getElementById("botonCopiar");

    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = texto.replace(/a/g, "ai")
                               .replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    document.getElementById("resultado").innerText = textoEncriptado;
    noEncontrado.style.display = "none";
    mensaje.style.display = "none";
    instruccion.style.display = "none";
    botonCopiar.style.display = "block";
}

function desencriptarTexto() {
    let texto = document.getElementById("textoEntrada").value;
    let noEncontrado = document.getElementById("noEncontrado");
    let mensaje = document.getElementById("mensaje");
    let instruccion = document.getElementById("instruccion");
    let botonCopiar = document.getElementById("botonCopiar");

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    document.getElementById("resultado").innerText = textoDesencriptado;
    noEncontrado.style.display = "none";
    mensaje.style.display = "none";
    instruccion.style.display = "none";
    botonCopiar.style.display = "block";
}

function copiarAlPortapapeles() {
    let resultado = document.getElementById("resultado");
    let range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
