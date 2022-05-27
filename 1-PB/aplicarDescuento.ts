import * as rl from 'readline-sync';

let precio: number = rl.questionFloat('Ingrese el precio del producto: ');
let cantidad: number = rl.questionInt ('Ingrese la cantidad de productos: ');
let descuento: number = 0.1;
let precioFinal: number;

if (precio > 1000 && cantidad >= 1){
    precio = precio * cantidad;
    precioFinal = precio - (precio * descuento);
    console.log('Tenes 10% de descuento por superar los 1000 en tu compra, el precio final seria: '+ precioFinal);
};