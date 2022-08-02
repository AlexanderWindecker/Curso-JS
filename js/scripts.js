//Sumando DOM


const vinos = [{
        ID: 10,
        Nombre: "Altos Las Hormigas Gualtallary",
        Uva: "Malbec",
        Ubicacion: "Valle de UCO",
        Botella: "750ml",
        Valor: 261000,
    },

    {
        ID: 20,
        Nombre: "Kaiken Mai",
        Uva: "Malbec",
        Ubicacion: "Mendoza Argentina",
        Botella: "750ml",
        Valor: 335000,
    },

    {
        ID: 30,
        Nombre: "Altos las Hormigas Reserva",
        Uva: "Malbec",
        Ubicacion: "Mendoza Argentina",
        Botella: "750ml",
        Valor: 160000,
    },
    {
        ID: 40,
        Nombre: "Kaiken Terror Malbec",
        Uva: "Mixta",
        Ubicacion: "Vista Flores-Mendoza",
        Botella: "750ml",
        Valor: 91000,
    },
    {
        ID: 50,
        Nombre: "Finca el Origen",
        Uva: "Malbec",
        Ubicacion: "Mendoza-Valle de Uco",
        Botella: "750ml",
        Valor: 66500,
    }

]



let carrito = []


/* let Hola = prompt("Hola gracias por visitarnos, desea ver nuestros catalogo? \n -Si \n -No")

while (Hola != "Si" && Hola != "No") {

    alert("Por favor elija una opcion");
    Hola = prompt("Hola gracias por visitarnos, desea ver nuestros catalogo? \n -Si \n -No")
    break;
}

if (Hola == "Si") {

    alert("Nuestros vinos son:")
    let nuestrosvinos = vinos.map((catalogo) => "ID: " + catalogo.ID + " - " + catalogo.Nombre + " " + "$" + catalogo.Valor)
    alert(nuestrosvinos.join(" - "))
} else if (Hola == "No") {
    alert("Gracias por visitarnos, vuelva pronto")
}



while (Hola != "No") {


    let producto = prompt("Agregue productos a su compra con su ID correspondiente \n ID: 10 - Altos Las Hormigas Gualtallary \n ID: 20 - Kaiken Mai \n ID: 30 - Altos las Hormigas Reserva \n ID: 40 - Kaiken Terror Malbec \n ID: 50 - Finca el Origen ");
    let Precio = 0


    if (producto == "Altos Las Hormigas Gualtallary" || producto == "Kaiken Mai" ||
        producto == "Altos las Hormigas Reserva" || producto == "Kaiken Terror Malbec" ||
        producto == "Finca el Origen") {

        switch (producto) {
            case "Altos Las Hormigas Gualtallary":
                Precio = 261000;
                break;
            case "Kaiken Mai":
                Precio = 335000;
                break;
            case "Altos las Hormigas Reserva":
                Precio = 160000;
                break;
            case "Kaiken Terror Malbec":
                Precio = 91000;
                break;
            case "Finca el Origen":
                Precio = 66500;
                break;

            default:
                break;
        }

        let unidades = parseInt(prompt("Ingrese la cantidad"))


        carrito.push({

            producto,
            unidades,
            Precio,
        })
        console.log(carrito);
    } else {
        alert("No tenemos ese producto")
    }


    despedida = prompt("Desea algun otro producto? seleccione: \n SI o No");


    if (despedida === "No") {

        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.Precio}`)
        })
        break;
    }

}


const total = carrito.reduce((acc, el) => acc + el.Precio * el.unidades, 0);


let opciones = prompt("El total a pagar es de: $" + total + " quiere abonarlo en cuotas? \n -Si \n -No")



if (opciones == "No") {

    alert("El total de su compra es de $" + total + " Gracias por su compra vuelva pronto");

}



while (opciones == "Si") {

    let definirCuotas = prompt("Puede hacerlo en: \nB -3 cuotas s/interes, \nC -6 cuotas s/interes,  \nD -12 cuotas s/interes ");

   

    if (definirCuotas == "B" || definirCuotas == "C" || definirCuotas == "D") {
        switch (definirCuotas) {
            case "B":
                cuotas = total / 3;
               
               alert  ("Su compra en 3 cuotas le queda en $" + Math.ceil(cuotas) + " C/U");
                break;
            case "C":
                let cuotasSeis = dividir(total, 6);

                alert("Su compra en 6 cuotas le queda en $" + Math.ceil(cuotasSeis) + " C/U");
                break;
            case "D":
                let cuotasDoce = dividir(total, 12);

                alert("Su compra en 12 cuotas le queda en $" + Math.ceil(cuotasDoce) + " C/U");
                break;
            default:
                mensaje = ("Opcion invalida")
                break;
        }

    }

    cierre = prompt("Desea corregir las cuotas? seleccione: \n SI o No");

    if (cierre === "No") {


        break;
    }

}
 */

//Eventos


function unsaludo () {
    alert ("Demasiado caro para tu bolsillo")

}

const saludo1 = document.getElementById("boton");

saludo1.addEventListener("click", unsaludo);

//.............................................

function unsaludo2 () {
    alert ("No no, este no")

}

const saludo2 = document.getElementById("botonTroll2");

saludo2.addEventListener("click", unsaludo2);

//...............................................

function unsaludo3 () {
    alert ("Este vino es feo")

}

const saludo3 = document.getElementById("botonTroll3");

saludo3.addEventListener("click", unsaludo3);

//..............................................

function unsaludo4 () {
    alert ("Te parece este?")

}

const saludo4 = document.getElementById("botonTroll4");

saludo4.addEventListener("click", unsaludo4);

//..............................................

function unsaludo5 () {
    alert ("Este es el ideal para ti")

}

const saludo5 = document.getElementById("botonTroll5");

saludo5.addEventListener("click", unsaludo5);

//..............................................

//Eventos



//DOM


let mensajecliente = document.createElement("h2");
mensajecliente.innerHTML = "<h2>Gracias por visitarnos, no vuelva pronto</h2>";
document.body.append(mensajecliente);

let mensajecliente1 = document.createElement("h2");
mensajecliente1.innerHTML = "<h2>Va en realidad regrese y riase un rato</h2>";
document.body.append(mensajecliente1);

let mensajecliente2 = document.createElement("h2");
mensajecliente2.innerHTML = "<h2>Total no va a comprar nada si esta todo re caro jajajaja</h2>";
document.body.append(mensajecliente2);


//DOM



function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}