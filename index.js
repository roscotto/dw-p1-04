"use strict";

/* ## Consigna

Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

- Promedio de edad general
- Promedio de edad de las mujeres
- Promedio de edad de los hombres

- Porcentaje de mujeres menores a 21 años
- Porcentaje de hombres mayores a 21 años

- La mayor edad ingresada de las mujeres
- La menor edad ingresada de los hombres

Los tres valores ingresados deben ser validados según corresponda */




/* Variables para la edad, sexo y ciudad*/
let ciudad = "";
let sexo = "";
let edad = 0;

/* Acumuladores */
let cantMujeres = 0;
let cantHombres = 0;
let acumMujMenores21 = 0;
let acumHomMayores21 = 0;
let totalPersonas = 0;

let acumEdadMujeres = 0;
let acumEdadHombres = 0;

/* Variables para maximo y minimo */
let edadMaxMujeres = Number.NEGATIVE_INFINITY;
let edadMinHombres = Number.POSITIVE_INFINITY;

/* Array que contiene sexos válidos */
const sexosValidos = ["F", "M"];

// FUNCION 1 - VALIDA QUE EL SEXO SEA "F" O "M"
function validarSexo(valor) {
    let resultado;

    if (!(sexosValidos.includes(valor))) {
        resultado = true; //DATOS INVÁLIDOS. EL LOOP DEBE REPETIRSE
        alert("La categoria ingresada es incorrecta. Recordá que los valores válidos son F ó M.");
    } else {
        resultado = false; // DATOS VÁLIDOS, EL LOOP PUEDE ROMPERSE Y CONTINUAR...
    }
    return resultado;
}


do {

    do {
        ciudad = prompt("Ciudad:");

    } while (!isNaN(ciudad) || ciudad.length > 20);

    do {
        sexo = prompt("Sexo femenino o masculino (F ó M)".toUpperCase());

    } while (!(sexo === "F" || sexo === "M"));

    do {
        edad = parseInt(prompt("Edad:"));

    } while (isNaN(edad) || (!(edad >= 0)) || (!(edad <= 110)));

    
    /* Algoritmo para sumar acumuladores de mujeres */
    if (sexo === "F") {
        cantMujeres++;
        acumEdadMujeres += edad;
        totalPersonas++;

        /* Algoritmo para hallar maximo edad mujeres */
        if (edad > edadMaxMujeres) {
            edadMaxMujeres = edad;
        }

        /* Algoritmo para sumar al acumulador de mujeres menores de 21 años */
        if (edad < 21) {
            acumMujMenores21++;
        }
    }


    /* Algoritmo para sumar acumuladores de hombres */
    else {
        cantHombres++;     // FUNCIONA
        acumEdadHombres += edad;  // 
        totalPersonas++; // FUNCIONA 

        /* Algoritmo para hallar mínimo de edad hombres */
        if (edad < edadMinHombres) {
            edadMinHombres = edad;
        }

        /* Algoritmo para sumar al acumulador de hombres mayores de 21 años */
        if (edad > 21) {
            acumHomMayores21++;
        }


    }
} while (confirm("Deseas cargar otra persona?"));

console.log(`Promedio de de edad general es: ${((acumEdadMujeres + acumEdadHombres) / totalPersonas).toFixed(1)}`);
console.log(`Promedio de edad de las mujeres es: ${(acumEdadMujeres / cantMujeres).toFixed(1)}`);
console.log(`Promedio de edad de los hombres es: ${(acumEdadHombres / cantHombres).toFixed(1)}`);

console.log(`La mayor edad ingresada de las mujeres fue: ${edadMaxMujeres}`);
console.log(`La menor edad ingresada de los hombres fue: ${edadMinHombres}`);

