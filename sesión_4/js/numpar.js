//función que nos permite evalular los números pares
function sali(){
    var entrada =  document.getElementById("numero").value;
     var contador = 0;
    let arreglo =[];
    //usamos for para que recorra el arreglo
     for (var i =0; i<= entrada; i++) {
        if (contador < entrada) {
            contador=contador +2;
            //empezamos a guardar en cada espacio automáticamente
        arreglo[i]=[contador];
        }    
    }
    //nos retorna el arreglo para luego poder imprimirlo
return (arreglo)  ; 
}
// funcion para insertar
function insertarFila() {
    let tblDatos = document.getElementById('tblDatos').insertRow(0);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);
    col1.innerHTML = sali();
    
}