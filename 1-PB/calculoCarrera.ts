import * as rl from 'readline-sync';

let vuelta1: number = rl.questionFloat('vuelta 1 (seg): ');
let vuelta2: number = rl.questionFloat('vuelta 2 (seg): ');
let vuelta3: number = rl.questionFloat('vuelta 3 (seg): ');
let vuelta4: number =  rl.questionFloat('vuelta 4 (seg): ');

console.log('Tiempo total : ' + (vuelta1 + vuelta2 + vuelta3 + vuelta4 + ' segundos'))
console.log('Promedio : ' + ((vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4) + ' segundos por vuelta')

