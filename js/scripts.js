//Desafio complementario Array

const vinos = [{
        id: 1,
        Nombre: "Altos Las Hormigas Gualtallary",
        Uva: "Malbec",
        Ubicacion: "Valle de UCO",
        Botella: "750ml",
        Valor: "$261.000",
    },

    {
        ID: 10,
        Nombre: "Kaiken Mai",
        Uva: "Malbec",
        Ubicacion: "Mendoza Argentina",
        Botella: "750ml",
        Valor: "$335.000",
    },

    {
        ID: 20,
        Nombre: "Altos las Hormigas Reserva",
        Uva: "Malbec",
        Ubicacion: "Mendoza Argentina",
        Botella: "750ml",
        Valor: "$160.000",
    },
    {
        ID: 30,
        Nombre: "Kaiken Terror Malbec",
        Uva: "Mixta",
        Ubicacion: "Vista Flores-Mendoza",
        Botella: "750ml",
        Valor: "$91.000",
    },
    {
        ID: 40,
        Nombre: "Finca el Origen",
        Uva: "Malbec",
        Ubicacion: "Mendoza-Valle de Uco",
        Botella: "750ml",
        Valor: "$66.500",
    }

]
console.log(vinos)

let ID = prompt ("Agregar identificatorio");
let Nombre = prompt ("Nombre del Vino");
let Uva = prompt ("Tipo de uva");
let Ubicacion = prompt ("Agregar ubicacion");
let Botella = prompt ("Agregar tamaño");
let Valor = parseInt(prompt("Agrega valor"));

let vino={ID,Nombre,Uva,Ubicacion,Botella,Valor}
vinos.push(vino)




//Simulador interactivo. Segundo desafio.

//Datos del cliente
/* 
let cuenta = parseFloat(prompt("Total de la cuenta"));

while (cuenta <= 0) {

    alert("Defina total de la cuenta");

    cuenta = parseFloat(prompt("Total de la cuenta"));

}


let porcentaje = prompt("Porcentaje de propina");

while (porcentaje <= 0) {


    alert("Por favor ingrese la propina")

    porcentaje = prompt("Por favor ingrese la propina");


}

let comensales = prompt("cuantos comensales son?");


while (comensales <= 0)

{

    alert("Por favor ingrese la cantidad de comensales")

    comensales = prompt("Por favor ingrese la cantidad de comensales?");
}


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

alert("Total $" + resultado2 + " por comensal"); */