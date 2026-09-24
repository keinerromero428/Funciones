//Enunciado
//Leer las calificaciones de un grupo (escala de 0.0 a 5.0) sin saber cuántas son. La lectura
//termina cuando se ingresa -1.
//Si una nota está fuera del rango, mostrar "Nota inválida" y no tenerla en cuenta. Al final
//mostrar: cantidad de notas válidas, promedio, nota más baja y cuántos aprobaron (nota mayor
//o igual a 3.0).

function esNotaValida(nota) {
    return nota >= 0 && nota <= 5;
}

function estaAprobado(nota) {
    return nota >= 3;
}

let nota = Number(prompt("Nota (-1 para terminar):"));

let cantidadNotas = 0;
let sumaNotas = 0;
let aprobados = 0;
let notaMasBaja = 0;

while (nota !== -1) {
    if (esNotaValida(nota)) {
        cantidadNotas++;
        sumaNotas = sumaNotas + nota;

        if (cantidadNotas === 1) {
            notaMasBaja = nota;
        } else if (nota < notaMasBaja) {
            notaMasBaja = nota;
        }

        if (estaAprobado(nota)) {
            aprobados++;
        }
    } else {
        console.log("Nota inválida, debe estar entre 0 y 5");
    }

    nota = Number(prompt("Nota (-1 para terminar):"));
}

console.log("Notas válidas: " + cantidadNotas);

if (cantidadNotas > 0) {
    let promedio = sumaNotas / cantidadNotas;

    console.log("Promedio: " + promedio);
    console.log("Nota más baja: " + notaMasBaja);
    console.log("Aprobados: " + aprobados);
} else {
    console.log("No hay notas válidas.");
}