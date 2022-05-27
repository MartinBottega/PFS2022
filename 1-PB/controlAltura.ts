import * as rl from 'readline-sync';

let altura: number = rl.questionFloat ("Ingrese su altura: ");
let alturaPermitida: number = 1.30;

if (altura >= alturaPermitida) {
    console.log("Puede pasar");
} else {
    console.log ("No puede pasar");
}