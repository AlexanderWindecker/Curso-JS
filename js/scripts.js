//Primera entrega del Proyecto final

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


let Hola = prompt("Hola gracias por visitarnos, desea ver nuestros catalogo? \n -Si \n -No")

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
                let cuotas = dividir(total, 3);
                alert("Su compra en 3 cuotas le queda en $" + Math.ceil(cuotas) + " Gracias por su compra");
                break;
            case "C":
                let cuotasSeis = dividir(total, 6);
                alert("Su compra en 6 cuotas le queda en $" + Math.ceil(cuotasSeis) + " Gracias por su compra");
                break;
            case "D":
                let cuotasDoce = dividir(total, 12);
                alert("Su compra en 12 cuotas le queda en $" + Math.ceil(cuotasDoce) + " Gracias por su compra");
                break;
            default:
                alert("Opcion invalida")
                break;
        }

    }

    cierre = prompt("Desea corregir las cuotas? seleccione: \n SI o No");

    if (cierre === "No") {

        alert("Gracias por su compra, vuelva pronto")
        break;
    }

}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}