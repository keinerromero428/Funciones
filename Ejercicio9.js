//Enunciado
//En un grupo de N aprendices se lee, uno por uno, el género (H o M) y la edad. Mostrar cuántos
//hombres y cuántas mujeres hay, el promedio de edad de los hombres, el de las mujeres y el de
//todo el grupo.

function esHombre(genero) {
    return genero === "H";
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let cantidadPersonas = Number(prompt("¿Cuántas personas?:"));

let hombres = 0;
let mujeres = 0;
let sumaEdadHombres = 0;
let sumaEdadMujeres = 0;
let sumaEdades = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
    let genero = prompt("Género persona " + i + " (H/M):").toUpperCase();
    let edad = Number(prompt("Edad persona " + i + ":"));

    sumaEdades = sumaEdades + edad;

    if (esHombre(genero)) {
        hombres++;
        sumaEdadHombres = sumaEdadHombres + edad;
    } else {
        mujeres++;
        sumaEdadMujeres = sumaEdadMujeres + edad;
    }
}

console.log("Hombres: " + hombres);

if (hombres > 0) {
    console.log(
        "Promedio de edad: " +
        calcularPromedio(sumaEdadHombres, hombres)
    );
} else {
    console.log("No hay hombres para calcular el promedio.");
}

console.log("Mujeres: " + mujeres);

if (mujeres > 0) {
    console.log(
        "Promedio de edad: " +
        calcularPromedio(sumaEdadMujeres, mujeres)
    );
} else {
    console.log("No hay mujeres para calcular el promedio.");
}

console.log(
    "Promedio del grupo: " +
    calcularPromedio(sumaEdades, cantidadPersonas)
);