//Primer desafio

//Ejemplo numero 1

/* let tuNumero = parseInt(prompt ("Ingrese su edad"));
let numero = tuNumero+10;

alert ("En 10 años tendras "  + numero +  " Años"); */

//Ejercicio 2

/* let Opcion = prompt("Elige un Opcion: \n1 Verde \n2 Lila \n3 Naranja \nPresiona ESC para salir");

while (Opcion != "ESC") {

    switch (Opcion) {
        case "1":
            alert("El color verde es un color secundario y se hace sumando el azul con el amarillo");
            break;            
        case "2":
            alert("El color Lila es un color secundario y se hace sumando el Azul con el Rojo");
            break;
        case "3":
            alert("El color Naranja es un color secundario y se hace sumando el Rojo con el Amarillo");
            break;
        default:
            alert("Elija muchos colores color");
            break;
            
    }

} */

// Ejemplo 3

/* let numero1 = parseInt(prompt("Ingrese numero"));
for (i=0; i < numero1; i++) {
    alert("Hola");
   
} */


//Simulador interactivo. Segundo desafio.

//Datos del cliente

let cuenta = parseFloat(prompt("Total de la cuenta"));

if (cuenta <= 0) {

    alert("Defina total de la cuenta");

    cuenta = parseFloat(prompt("Total de la cuenta"));

}


let porcentaje = prompt("Porcentaje de propina");

if (porcentaje <= 0) {


    alert("Por favor ingrese la propina")

    porcentaje = prompt("Por favor ingrese la propina");


}

let comensales = prompt("cuantos comensales son?");


if (comensales <= 0)

{

    alert("Por favor ingrese la cantidad de comensales")

    comensales = prompt("Por favor ingrese la cantidad de comensales?");}


//calculo

let porcentajetotal = porcentaje / 100;
//console.log(porcentajetotal);

let totalcuenta = cuenta * porcentajetotal;
//console.log(totalcuenta);

let resultado1 = totalcuenta / comensales;
//console.log(resultado1);

let resultado2 = resultado1 + cuenta / comensales
//console.log(resultado2);


//Resultado

alert("Propina por comensal $" + resultado1);

alert("Total $" + resultado2 + " por comensal");
