//definimos la variable
var palabra;
//va ha comprovar si el juego inicia
function iniciarJuego(){
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "flex";

    document.querySelector("canvas").style.display = "";
    document.querySelector(".entrada-juego").style.display = "";
    document.querySelector(".mensaje").style.display = "none";
//llamamos ala funcion escoger palabra para guardarla
    palabra = escogerPalabra();
    errores = 0;
    lUsadas = [];
    finJuego = false;
    ganaste = 0;
    mensaje = "";
    letrasErrores = [];

    limpiar();

    mostrarGuiones(palabra);

    console.log(palabra);
}
//mostraremos los guiones para el estilo
function mostrarGuiones(palabra) {
    for(var i = 1; i <= 8; i++) {
        document.querySelector(".linea-" + i).style.display = "none";

        var letras = document.querySelector(".letras");
        while(letras.firstChild) {
            letras.removeChild(letras.firstChild);
        }

        var letrasNo = document.querySelector(".letras-no");
        while(letrasNo.firstChild) {
            letrasNo.removeChild(letrasNo.firstChild);
        }
    }
    //recorrra  en funcion a la longitud de la variable palabra

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".linea-" + i).style.display = "";

        var letras = document.createElement("span");
        letras.classList.add("letra");
        letras.classList.add("letra-" + i);
        document.querySelector(".letras").appendChild(letras);
    }
}
//una ves ingresado todo sea fallido o no acaba el juego
function vFin() {
    if(finJuego) {
        document.querySelector("canvas").style.display = "none";
        document.querySelector(".entrada-juego").style.display = "none";
        document.querySelector(".mensaje").style.display = "";
        document.querySelector(".mensaje").textContent = mensaje;
        document.querySelector(".mensaje").style.color = colorMensaje;
    }
}