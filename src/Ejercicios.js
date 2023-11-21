// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 1")
console.log("")

function esPar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un numero par");
    } else {
        console.log(numero + " es un numero impar");
    }
}

esPar(13)
esPar(8)

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 2")
console.log("")

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(numero1 + " es mayor que " + numero2);
    } else if (numero2 > numero1) {
        console.log(numero2 + " es mayor que " + numero1);
    } else {
        console.log(numero1 + " y " + numero2 + " son iguales");
    }
}

compararNumeros(5, 10)
compararNumeros(8, 3)
compararNumeros(4, 4)

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 3")
console.log("")

function multiploDeCinco(numeroo) {
    if (numeroo % 5 === 0) {
        console.log(numeroo + " es multiplo de 5");
    } else {
        console.log(numeroo + " no es multiplo de 5")
    }
}

multiploDeCinco(10);
multiploDeCinco(7);
multiploDeCinco(0);

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 4")
console.log("")

function numeroHasta(numerooo) {
    for (let i = 0; i <= numerooo; i++) {
        console.log(i);
    }
}

numeroHasta(5)

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 5")
console.log("")

function imprimirPalabraNVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

imprimirPalabraNVeces("Hola", 3);

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 6")
console.log("")

function imprimirArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 7")
console.log("")

function sinQuintoElemento(arrr) {
    for (let i = 0; i < arrr.length; i++) {
        if (i !== 4) {
            console.log(arrr[i]);
        }
    }
}

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sinQuintoElemento(Array);

// <--------------------------------------------------------------------------------------------------->

console.log("")
console.log("Ejercicio 8")
console.log("")

function multiplicacion(arrrr, multiplicador) {
    for (let i = 0; i < arrrr.length; i++) {
        const resultado = arrrr[i] * multiplicador;
        console.log(resultado);
    }
}

const MArray = [1, 2, 3, 4, 5];
const numeroMultiplicador = 3;
multiplicacion(MArray, numeroMultiplicador);

// <--------------------------------------------------------------------------------------------------->