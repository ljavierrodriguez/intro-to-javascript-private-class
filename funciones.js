/* Funciones  */
/* 
// funcion de nombre
function funcName(){
    sentencias
}

// funcion declarativa
const funcName = function(){
    sentencias
}

*/
// Hoinsting
saludo();


function saludo(){
    console.log("Hola desde Javascript");
}


const saludo2 = function(){
    console.log("Hola desde Javascript 2")
}
saludo2();

function sumar(num1, num2, num3){
    //if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number') 
    //    return "Por favor ingrese solo numeros";
    
    let resultado = num1 + num2 + num3;
    //console.log(resultado);
    return `El resultado de la suma de ${num1} + ${num2} + ${num3} es: ${resultado}`;
}


console.log(sumar('a', 1, 3))


function calcular(...valores){
    let result = 0;

    for(let i = 0; i < valores.length; i++){
        if(i % 2 === 0) continue;
        result += valores[i];
    }

    return result;
}


console.log(calcular(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));


function restar(num1, num2 = 10){
    return num1 - num2;
}

restar(10, 20); // -10
restar(10); // 0