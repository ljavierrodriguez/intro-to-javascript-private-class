/* Condicionales */
/*

if (condition){ // true
    sentencias
}

if (condicion){ // true
    sentencias
} else {
    sentencias
}

if (condicion) {
    sentencias
} else if (condicion) {
    sentencias
} else if (condicion) {
    sentencias
} else {
    sentencias
}

Operadores de Comparacion:

=== valor y tipo => '5' === 5 // false
== valor => '5' == 5 // true
!== valor y tipo == 'a' !== 1 // true
!= valor 'a' != 'b' 
>=
<=
>
<

Operadores Logicos: (and => &&, or => ||, not => !)

true && true => true
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false

!true && !true => false
!true && !false => false
!false && !false => true

!true || !true => false
!true || !false => true
!false || !false => true

*/


let edad = 35;

if (edad >= 18) {
    console.log("Es mayor de Edad");
}

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad")
}

if (edad <= 18) {
    console.log("Es menor de edad");
} else if (edad <= 30) {
    console.log("Es un adulto joven");
} else if (edad <= 50) {
    console.log("Es un adulto")
} else if (edad > 51) {
    console.log("Es un adulto mayor");
}

let a = 10;
let b = 6;
let c = 8;

if (a > b && a > c) {
    console.log("A es el mayor");
} else if (b > c) {
    console.log("B es el mayor");
} else {
    console.log("C es el mayor");
}

/* 
if (condicion && condicion && condicion){

}

if (condicion || condicion || condicion){

}
*/

let key = 1;
switch (key) {
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("Opcion 2");
        break;
    case 3:
        console.log("Opcion 3");
        break;
    case 4:
        console.log("Opcion 4");
        break;

    default:
        console.log("Opcion no valida");
        break;
}

switch (true) {
    case a > b && a > c:
        console.log("El mayor es A");
        break;

    case b > c:
        console.log("El mayor es B");
        break;
    default:
        console.log("El mayor es C");
        break;
}

console.log("Termine todas mis tareas");

let fecha = new Date();
console.log(fecha);