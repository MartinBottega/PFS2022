import * as rl from 'readline-sync';

let n1: number = rl.questionFloat ("Ingrese el primer numero: ");
let n2: number = rl.questionFloat ("Ingrese el segundo numero: ");
let n3: number = rl.questionFloat ("Ingrese el tercer numero: ");

if (n1 > n2 && n1 > n3) {
    console.log("El numero mayor es: " + n1);
} else if (n2 > n1 && n2 > n3) {
    console.log("El numero mayor es: " + n2);
} else {
    console.log("El numero mayor es: " + n3);
}