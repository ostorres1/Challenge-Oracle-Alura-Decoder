//Funcion para pasar a minúscula el texto ingresado
function minus(a){
    a.value = a.value.toLowerCase();
}
//Función para cambiar los acentos de las vocales
function sin_acento(txt_acento){
    var txt_sinacento = txt_acento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return txt_sinacento;
}
//Boton quitar acentos
var btnquitarAcentos = document.querySelector("#acentos");
btnquitarAcentos.addEventListener("click", function(){
    var form = document.querySelector(".formulario");  
    var text_int = document.querySelector(".text-1");  
    var texto_acento = form.txt_init.value;
    var texto_sinacento = sin_acento(texto_acento);
    text_int.value = texto_sinacento;
});
//Copiar al portapaleles Clipboard
function copy_clipboard(){
    var contenido = document.querySelector("#txt_final");
    contenido.select();
    document.execCommand('copy');
    alert("Texto copiado");
}

