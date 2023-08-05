//Ejercicio 1
let  miNombre = "Miguel Ángel"
console.log(miNombre);

//Ejercicio2
let  miApellido ='Serrano'
console.log(miApellido);

//Ejercicio 3
let  miEdad = 28
console.log(miEdad);

//Ejercicio 4
let  miMascota = "Iris"
console.log(miMascota);

//Ejercicio 5
const edadMascota = 4
console.log(edadMascota);

//Ejercicio 7
const nombreCompleto = miNombre +" "+ miApellido 
console.log(nombreCompleto);

//Ejercicio 8
let textoPresentacion = miNombre+", "+ miApellido+", "+miEdad+", "+miMascota+", "+nombreCompleto
console.log(textoPresentacion);

//Ejercicio 9
let sumaEdades = miEdad + edadMascota
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota
console.log(restaEdades);

let productoEdades = miEdad * edadMascota
console.log(productoEdades);

const divisionEdades = miEdad / edadMascota
console.log(divisionEdades);

//Ejercicio 10
let alumno = {
        genero: "Varon ",
        edad:28,
        nacionalidad: "Argentina",
        mascota:"Gato",
        comida: "Fideos",
}

console.table(alumno);
console.log(alumno.genero);
console.log(alumno.edad);
console.log(alumno.nacionalidad);
console.log(alumno.mascota);
console.log(alumno.comida);


//Ejercicio 11
const mascota = {
    genero:"Hembra",
    edad: 4,
    color: "Negro",
    nombre:"Iris",
    comidaFavorita:"Pescado",
}
console.table(mascota);
console.log(mascota.genero);
console.log(mascota.edad);
console.log(mascota.color);
console.log(mascota.nombre);
console.log(mascota.comidaFavorita);

//Ejercicio 12

let frutas =["Tomate","Naranja","Banana","Manzana","Limon"];
console.log(frutas);
console.log(frutas[0],frutas[1],frutas[2],frutas[3],frutas[4]);

//Ejercicio 13
// let soyMayorDeEdad = Number(prompt("Ingresa tu edad"))>= 18;

// console.log("Soy mayor de edad " + soyMayorDeEdad);

//Ejercicio 14
let numeros = ["uno","dos","tres","cuatro","cinco"];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//Ejercicio 15
let familia=[{
    papa:"Jorge",
}, 
{
    tia:"Rebeca",  
},
{
    tio:"Ismael",
},
{
    abuelo:"Ricardo",
},
{
    primo:"Jorge",
}
]
console.log(familia);
console.log(familia[0].papa, familia[1].tia, familia[2].tio, familia[3].abuelo, familia[4].primo );

// // Ejercicio 16 Crear una variable llamada textoAleatorio formando una frase con el segundo
// elemento del array del punto 12, el cuarto elemento del punto 14 y el quinto objeto del
// array del punto 15.


let textoAleatorio = frutas[1] +" es del numero "+numeros[4] +" para mi tio " +familia[4].primo;
console.log("El talle de la remera de color "+ textoAleatorio);

// Ejercicio 17. Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar
// por consola los resultados de comparar los valores y guardarlos en variables llamadas
// por ejemplo: edadesIguales, soyMayor, soyMenor, etc. y mostrar mensajes en consola
// como los siguientes:
// a. Mi edad es igual a la de mi compañero: false
// b. Mi edad es mayor a la de mi compañero: true
// c. Mi edad es menor a la de mi compañero: false

// miEdad = prompt("ingresar mi edad:")
// let edadDeMicompañero= prompt("ingresar la edad de mi compañero: ")

// let edadesIguales= miEdad >= edadDeMicompañero 
// console.log("mi edad es igual a la de mi compañero"+ edadesIguales);

// let soyMayor = miEdad>edadDeMicompañero
// console.log("Mi edad es mayor a la de mi compañero " + soyMayor);

// let soyMenor = miEdad <= edadDeMicompañero
// console.log("Mi edad es menor a la de mi compañero " + soyMenor);

//Ejercicio 18 

// let edadDeLaPersona= prompt("Ingrese su edad: ")
// let alturaDeLaPersona= prompt("Ingrese su altura: ")

// let puedeSubir= (edadDeLaPersona>6 && alturaDeLaPersona>=120) 
// console.log( "Puede subir a la atraccion " + puedeSubir);

//Ejercicio 19
// Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o
// “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable
// llamada puedePasar guardar el resultado de la operación resultante de si la persona
// tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La
// persona puede pasar y el resultado de la variable.

let entradaDeLaPersona = prompt("Ingrese si eres VIP, NORMAL, LIMITADO: ")
let saldoDeLaPersona= prompt("ingrese su saldo por favor: ")

const puedePasar= (entradaDeLaPersona === "VIP" && saldoDeLaPersona> 1000)
console.log("La persona puede pasar "+ puedePasar);