/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
var botonEncripta = document.querySelector("#encripta");

botonEncripta.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector(".formulario");
    var texto_1 = form.txt_init.value;
    let str_texto_1 = [...texto_1];

    for(let i = 0; i < str_texto_1.length; i++){
        if(str_texto_1[i] == "e"){
            str_texto_1[i] = "enter";
        }
        else if(str_texto_1[i] == "i"){
            str_texto_1[i] = "imes";
        }
        else if(str_texto_1[i] == "a"){
            str_texto_1[i] = "ai";
        }
        else if(str_texto_1[i] == "o"){
            str_texto_1[i] = "ober";
        }
        else if(str_texto_1[i] == "u"){
            str_texto_1[i] = "ufat";
        }
    }

    var cadena_final = str_texto_1.toString().replace(/,/g, "");
    form.txt_final.value = cadena_final;
    form.txt_final.value = sin_acento(cadena_final);
});