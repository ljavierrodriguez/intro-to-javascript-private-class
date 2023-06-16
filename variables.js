/* Tipo de Datos */
/* 
String
Number
Boolean 
Undefined 

Object 
    Array 
    Literal Object
    Null

Function

*/

/* Definicion de Variables (var, let, const) */

var nombre = "Jose"; // String => "", '', ``;
var apellido = 'Perez'
var nombre_completo = `${nombre} ${apellido}`; // Jose Perez

let parrafo = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
    "Aut minus necessitatibus unde? Animi, quo officia, illo quidem impedit modi " +
    " deserunt temporibus perspiciatis quasi quaerat est a aliquam id? Porro, cupiditate";

let parrafo2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
    ' Aut minus necessitatibus unde? Animi, quo officia, illo quidem impedit modi ' +
    'deserunt temporibus perspiciatis quasi quaerat est a aliquam id? Porro, cupiditate'

let parrafo3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Aut minus necessitatibus unde? Animi, quo officia, illo quidem impedit modi 
deserunt temporibus perspiciatis quasi quaerat est a aliquam id? Porro, cupiditate`

let edad = 40; // Number
let sueldo = 100.40;
let grade = -10;
let saldo = -100.40;

let solter = true; // boolean
let activo = false; // boolean

let address; // undefined

const PI = 3.1416; // Definimos una constante
//PI = 2; // Error

let name = null;

let datos = [true, "Jose", [1, 2], { name: 'Luis' }, null, 0];
let datos2 = Array(1, 2, 3, 4);
let valor = datos[4]; // null

let num2 = datos[2][1]; // 2

let a = 1;
let b = 2;
let c = 3;

let nums = [a, b, c, datos, datos2];

let matriz = [
    [[1, 2], [1, 2]],
    [[1, 2], [1, 2]],
    [[1, 2], [1, 2]],
]

const nombres = ["Luis", "Paco", "Hugo"];
//nombres = ["Pedro", "Juan", "Miguel"];
nombres = "";
nombres[2] = "Miguel";

let persona = {
    nombre: "",
    apellido: "",
    saludo: function(){},
    edad: 20,
    numeros: [1, 2, 3, 4]
}

persona.edad = 30;
persona['nombre'] = "John";
persona["email"] = "john.doe@gmail.com";

delete persona.nombre;
persona.numeros[2];
persona.numeros[4] = "Pedro"; 