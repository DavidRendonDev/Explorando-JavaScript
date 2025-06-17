let edad = prompt("por favor ingresa tu edad: ");
console.log("tienes" + edad + "años");


alert("Bienvenido a mi Ghetto")


//5.1

let numero = prompt("ingrese un nuemero");
 numero = Number(numero);

if (numero > 10){
    console.log("el nuemero es mayor que 10");
} else if (numero < 10){
    console.log("el nuemero es menor que 10");
}else {
    console.log("el nuemro es igual a 10");
}


//5.2

let NombreUsuario = prompt(" dime quien eres?");

if (NombreUsuario === "Admin"){
    console.log("ADMINISTRADOR PUEDES ESTAR AQUI")
}else{
    console.log("hola obrero" + NombreUsuario);
}


//5.3

function ParoImpar(numero) {
    return numero % 2 === 0 ? "par" : "impar";
}

let num = 7;
let resultado = ParoImpar(num);
console.log(`el numero ${num} es ${resultado}`);

num = 10;
resultado = ParoImpar (num);
console.log(`el numero ${num} es ${resultado}`);