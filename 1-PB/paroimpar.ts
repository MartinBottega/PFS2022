import * as rl from 'readline-sync';

let numeroIngresado: number = rl.questionInt ("Ingrese un numero: ");

if (numeroIngresado == 0) {
     console.log("El " + numeroIngresado + " no es par ni impar");
 } else if ( numeroIngresado % 2 == 0) {
    console.log("El " + numeroIngresado + " es par");
} else {
     console.log("El " + numeroIngresado + " es impar");
};

