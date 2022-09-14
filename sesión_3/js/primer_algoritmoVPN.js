//******** algoritmo para verificar si es un número primo ********

var entrada = parseInt(prompt("Ingresa el número: "));
var contador = 0;
if(entrada != 1){
//procesando
    for (var a=1 ; a <= 9 ; a++) {
    var resultado= Number. isInteger(entrada / a);
        if( resultado== true){
           ++contador;
        }
    }
//vericando 
    if (contador<3) {
//resultado
        alert(entrada + " Es un número Primo. ");
        alert("PI * "+ entrada + " = " + entrada*Math.PI);
    }else{
        alert(entrada + " No es primo.");
    }
}else{alert("1 No es un número primo.");}
    
/**RESUMEN:
 * PRIMERO  Se recibe un  número para verificar.
 * SEGUNDO  El número de $entrada lo dividimos  con cada numero del 1-9 
 *          para saber  si la division es entera o no
 *          la variable $resultado recibirá un valor(true o false).
 * TERCERO si es  verdadero el $contador aumentará +1.
 * CUARTO  Verificaremos  si la varible $contador  es menor a 3( los números primos 
 *          solo  son divisibles por él mismo y la unidad).
 * QUINTO  Se muestra el resulado.*/ 

//Grácias eso es todo.




    
   
