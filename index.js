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


do {

    do {
        ciudad = prompt("Ciudad:");

    } while (!isNaN(ciudad) || ciudad.length > 20);

    do {
        sexo = prompt("Sexo Hombre ó Mujer (H o M)").toUpperCase();

    } while (!(sexo === "H" || sexo === "M"));

    do {
        edad = parseInt(prompt("Edad:"));

    } while (isNaN(edad) || (!(edad >= 0)) || (!(edad <= 110)));

    
    /* Algoritmo para sumar acumuladores de mujeres */
    if (sexo === "M") {
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



alert(`Promedio de de edad general es: ${((acumEdadMujeres + acumEdadHombres) / totalPersonas).toFixed(1)}`);
alert(`Promedio de edad de las mujeres es: ${(acumEdadMujeres / cantMujeres).toFixed(1)}`);
alert(`Promedio de edad de los hombres es: ${(acumEdadHombres / cantHombres).toFixed(1)}`);


alert(`Porcentaje de mujeres menores a 21 años es: ${((acumMujMenores21 * 100) / cantMujeres).toFixed(0)} %.`);
alert(`Porcentaje de hombres mayores a 21 años es: ${((acumHomMayores21 * 100) / cantHombres).toFixed(0)} %.`);

alert(`La mayor edad ingresada de las mujeres fue: ${edadMaxMujeres}`);
alert(`La menor edad ingresada de los hombres fue: ${edadMinHombres}`);

