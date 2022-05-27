import * as rl from 'readline-sync';

let num: number[] = [20,14,8,0,5,19,24];
function mostrarNum () {
    console.log(num)
}
mostrarNum();


let numeros: number[] = [20,14,8,0,5,19,24];
let indice: number;
function mostrarNumeros () {
    for(indice=0; indice<numeros.length;indice++) {
        console.log(numeros[indice]);
    }
}
mostrarNumeros();