//funcion que dibujara la horca dependiendo de los errores
function dHorca(errores) {
    switch(errores) {
        case 1:
            dBase();
            break;
        case 2:
            dMastil();
            break;
        case 3:
            dTravesa();
            break;
        case 4:
            dSoga();
            break;
        case 5:
            dCabeza();
            break;
        case 6:
            dTronco();
            break;
        case 7:
            dPieDerecho();
            break;
        case 8:
            dPieIzquierdo();
            break;
        case 9:
            dManoDerecha();
            break;
        case 10:
            dManoIzquierda();
            return false;
            break;
        default:
            break;
    }
}
//evaluara las letras
function dLetraCorrecta(letra, position) {
    var letras = document.querySelector(".letra-" + position);
    letras.textContent = letra;
}
function dLetraIncorrecta(letra) {
    var letraNo = document.createElement("span");
    letraNo.classList.add("letra-no");
    letraNo.textContent = letra;
    document.querySelector(".letras-no").appendChild(letraNo);
}
function dMensaje(mensaje) {
    console.log(mensaje);
}
//definimos variables para analizar el final
var finJuego = false;
var ganaste = 0;
var mensaje = "";
var colorMensaje;
var letrasErrores;
//verificacion de las letras
function vLetra(letra) {
    var esta = false;

    if(lUsadas.indexOf(letra) == -1) {
        lUsadas.push(letra);
    
        for(var i = 0; i < palabra.length; i++) {
            if(letra == palabra[i]) {
                dLetraCorrecta(letra, i + 1);
                ganaste++;
                esta = true;
            }
    
            if(ganaste == palabra.length) {
                finJuego = true;
                mensaje = "Ganaste, felicidades. La palabra era: " + palabra;
                colorMensaje = "green";
                vFin();
            }
        }
        if(!esta) {
            if(letrasErrores.indexOf(letra) == -1) {
                errores++;
                letrasErrores.push(letra);
                dLetraIncorrecta(letra);
                if(dHorca(errores) == false) {
                    finJuego = true;
                    mensaje = "Perdiste, lo siento. La palabra era: " + palabra;
                    colorMensaje = "red";
                    vFin();
                }
            }
        }
        return esta;
    }
}

function vGanaste() {
    
}
//verificara las palabras
function verificarPalabra(palabra) {
    if(palabra.length > 8 || palabra.length < 2) {
        return false;
    }
    for(var i = 0; i < palabra.length; i++) {
        switch(palabra[i]) {
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "Ñ":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                continue;
                break;
            default:
                return false;
                break;
        }
    }
    return true;
}document.addEventListener("keypress", vTecla);

var errores = 0;
var lUsadas = [];

function vTecla(event) {
    var letra = event.key.toUpperCase();;
    
    if(vLetraCorrecta(letra)) {
        var indice = vLetra(letra);
    }
}

function vLetraCorrecta(letra) {
    var l = letra.toUpperCase();
    switch(l) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "Ñ":
        case "O":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            return true;
            break;
        default:
            return false;
            break;
    }
}