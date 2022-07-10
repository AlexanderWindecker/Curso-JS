//Ejemplo numero 1

let tuNumero = parseInt(prompt ("Ingrese su edad"));
let numero = tuNumero+10;

alert ("En 10 años tendras "  + numero +  " Años");

// Ejemplo numero 2

let Opcion = prompt("Elige un Opcion: \n1 Verde \n2 Lila \n3 Naranja \nPresiona ESC para salir");

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
            alert("Elija un color");
            break;
            
    }

}

// Ejemplo 3

let numero1 = parseInt(prompt("Ingrese numero"));
for (i=0; i < numero1; i++) {
    alert("Hola");
   
}