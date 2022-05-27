import * as rl from 'readline-sync';

let alumno: string = rl.question('Ingrese el nombre del alumno: ');
let notaPractica, notaEjercicios, notaTeorica, notaFinal: number;

while(alumno != '' ) {
    notaPractica = rl.questionInt('Ingrese la nota practica: ');
    notaTeorica = rl.questionInt('Ingrese la nota teorica: ');
    notaEjercicios = rl.questionInt('Ingrese la nota de ejercicios: ');
    if(notaPractica < 0 || notaPractica > 10 || notaTeorica < 0 || notaTeorica > 10 || notaEjercicios < 0 || notaEjercicios > 10) {
        console.log('Ingresaste valores invalidos.');
    } else {
        notaFinal = (notaPractica * 0.1) + (notaTeorica * 0.4) + (notaEjercicios * 0.5);
        console.log('La nota final es: ' + notaFinal);
    }    
    alumno = rl.question('Ingrese el nombre del siguiente alumno: ');
}