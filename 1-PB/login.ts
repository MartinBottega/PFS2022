import * as rl from 'readline-sync';

let id: string = "Juan";
let pw: string = "claveJuan";
let usuario: string = rl.question ("Ingrese su usuario: ");
let password: string = rl.question ("Ingrese su contraseña: ");

if (usuario == id && password == pw) {
    console.log("Usuario y contraseña correctos");
} else {
    console.log("Ingresaste un usuario o contraseña incorrectos");
}
