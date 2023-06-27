/* DOM (Document Object Model) */

/*

document // objeto principal

getElementById('id') // Devuelve un elemento que tiene por id el valor indicado
getElementsByTagName('tag') // Devuelve una coleccion de nodos (etiquetas) por el tag o elemento indicado
getElementsByClassName('class') // Devuelve una coleccion de nodos (etiquedas) por la clase indicada
getElementsByName('name') // Devuelve una coleccion de nodos (etiquedas) por el nombre indicada


querySelector('selector') // Devuelve el elemento o nodo por el selector indicado
querySelectorAll('selector') // Devuelve una coleccion de elementos o nodos por el selector indicado

createElement('tag') // Permite crear un nuevo nodo (elemento) segun el tipo de elemento indicado
createTextNode('texto') // Permite crear texto en formato de nodo
*/

let contenido = document.getElementById('contenido');

contenido.style.backgroundColor = 'gray';
//contenido.innerHTML = "Hola desde Javascript usando DOM";

console.log(contenido)

let parrafos = document.getElementsByTagName('p');
parrafos[1].style.backgroundColor = "red";
console.log(parrafos);

let divs = document.getElementsByTagName('div');
console.log(divs);

let textos = document.getElementsByClassName('texto');
console.log(textos);


let chks = document.getElementsByName('opciones');
console.log(chks);


/* 
Selectores CSS

id => #
class => .
tag => p, div, h1

*/

let content = document.querySelector('#contenido');
console.log(content);

let chk = document.querySelector('[type=checkbox]');
console.log(chk);

let chks2 = document.querySelectorAll('[type=checkbox]');
console.log(chks2);

let li = document.querySelectorAll('.back li');
console.log(li);

li[3].style.color = "red";


let content_textos = document.querySelector('#contenido div');

let newParagraph = document.createElement('P');
//newParagraph.innerHTML = "Creado desde el dom";
let textNode = document.createTextNode("Creado desde el dom 1");
let textNode2 = document.createTextNode("Creado desde el dom 2");
newParagraph.appendChild(textNode);
newParagraph.appendChild(textNode2);

//newParagraph.innerHTML += "Creado desde el dom 1";
//newParagraph.innerHTML += "Creado desde el dom 2";

content_textos.appendChild(newParagraph);


/* BOM (Browser Object Model) */
/* 
window 

open
alert()
confirm()

*/

//window.open('https://google.cl')
window.alert("Hola Mundo");