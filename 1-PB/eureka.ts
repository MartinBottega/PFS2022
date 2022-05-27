import * as rl from 'readline-sync';

let claveIngresada: string = rl.question('Escriba su clave: ');
let clave: string = "eureka";
let contador: number = 1;

while(claveIngresada != clave && contador <=2) {
    claveIngresada = rl.question('Contraseña incorrecta, vuelva a escribir su clave: ');
    contador += 1;
    if(claveIngresada == clave) {
        console.log('Clave correcta');
    }else if(contador == 3){
        console.log('Agotaste tus oportunidades')
    }
}

