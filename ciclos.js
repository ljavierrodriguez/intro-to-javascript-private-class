/* Ciclos o Bucles o Loops */
/* 
Ciclo For:

Sintaxis:

for(contador; condicion; incremento){
    sentencias
}

for(indice in coleccion){
    sentencias
}

for(valor of coleccion){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias
} while(condicion)

*/

// 1. Imprimir los numeros del 1 al 10
for (let i = 1; i <= 10; i++) { // i=i+1 // i+=1
    //console.log(i);
}

let notas = [10, 14, 8, 12, 21, 35];

for (let i = 0; i < notas.length; i++) {
    //console.log(notas[i]);
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Recorremos el array mas externo
for(let i = 0; i < matriz.length; i++){
    let item = matriz[i];
    // Recorremos el array mas interno
    for(let j = 0; j < item.length; j++){
        let item2 = item[j];
        //console.log(item2);
    }
    //console.log("-------");
}


for(let indice in notas){
    //console.log(indice);
    //console.log(notas[indice]);
}

for(let row in matriz){
    //console.log(matriz[row])
    for(let col in matriz[row]){
        //console.log(col)
        //console.log(matriz[row][col])
    }
}

for(let valor of notas){
    //console.log(valor)
}

for(let row of matriz){
    //console.log(row)
    for(let col of row){
        //console.log(col)
    }
}

let i = 1;
while(i <= 10){
    console.log(i)
    i++;
}

let indice = 0;
while(indice < notas.length){
    console.log(notas[indice]);
    indice++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while(j <= 10)


let nombre = "Luis Javier";
for(let letter of nombre){
    console.log(letter);
}