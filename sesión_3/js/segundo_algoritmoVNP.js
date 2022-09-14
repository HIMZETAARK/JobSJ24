/* Algoritmo que verifica si un número es primo solo con la condicinal if/else **/
var entrada = parseInt(prompt("Ingresa el numero: "));
//Procesando atraves de la division si es entera o no
var pro1 = Number. isInteger(entrada / 2);
var pro2 = Number. isInteger(entrada / 3);
var pro4 = Number. isInteger(entrada / 5);
var pro5 = Number. isInteger(entrada / 6);
var pro6 = Number. isInteger(entrada / 7);
// el resultado de pi*numero se mostrará siempre que el número de entrada sea primo
var resultado =entrada*Math.PI;

//verificando los 4 primeros primos
if((entrada == 2 )|| (entrada == 3) || (entrada == 5)|| (entrada ==7)){
    alert(entrada + " Es un numero primo.");
    alert("PI * "+ entrada + " = " +resultado);
}else{
    //verificando de los demás # primos 
    if( (pro1 == false  ) 
   && (pro2 == false )
   && (pro4 == false )
   && (pro5 == false )
   && (pro6 == false )
   && (entrada != 1  )
   && entrada/entrada == 1
    ){
        alert(entrada + " Es un numero primo. " );
        alert("PI * "+ entrada + " = " +resultado);
        
    }else{
        alert(entrada + " No es un numero primo. ");
    }
}

//Grácias eso es todo.
