//2.1

let nombre = "David R"
console.log("hola" + " " +  nombre + ".")

//2.2

let numeroEntero = 20;
let numeroDecimal = 10.101;
let texto = "ghetto Gang";

console.log(numeroEntero);
console.log(numeroDecimal);
console.log(texto);

//2.3

const PI = 3.1416
console.log(typeof PI)

//2.4

let nothing = 
console.log()

//2.5

let variableNull = null;
let variableBooleano = true;

console.log(variableNull);
console.log(variableBooleano);

//4.1

let numero1 = 55;
let numero2 = 78;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

console.log("suma :" + suma);
console.log("resta: " + resta);
console.log("multiplicacion: " + multiplicacion);
console.log("division: " + division);
console.log("modulo: " + modulo);

//4.2

let nombre2 = "david papasito";
let saludar = " como estas hermoso";



console.log('que mas pues' + " " + nombre2 + saludar);

//4.3

console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);

//6.1
//---------------------//
//mensaje informativo
console.info("este es un mensaje informativo");

//mensaje de advertencia
console.warn("este es un mensaje de advetencia");

//mensaje de error 
console.error("esto es un mensaje de error");

//Grupo de mensajes
console.group("mi grupo de mensajes");
console.log("mensaje dentro del grupo 1 ");
console.log("mesanje dentro del grupo 2 ");
console.groupEnd();

// Tiempo de ejecución de un bloque de código
console.time("Mi Temporizador");
// Simular alguna operación que toma tiempo
for (let i = 0; i < 100000; i++) {
  // Hacer algo
}
console.timeEnd("Mi Temporizador");