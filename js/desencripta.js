/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonDesencripta = document.querySelector("#desencripta");
botonDesencripta.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector(".formulario"); 
    var textareaDesencripta = form.txt_init.value;

    var desenc = "";
    desenc = textareaDesencripta.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    var textoFinal = desenc;
    form.txt_final.value = textoFinal;
    form.txt_final.value = sin_acento(textoFinal);
});
