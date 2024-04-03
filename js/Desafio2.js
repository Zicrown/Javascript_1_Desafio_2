/* 
 Una compañia tiene establecido un local de cine y desea automatizar sus ventas a traves de su sitio web. La compañia desea tener la posibilidad de vender boletos para el mismo dia y como venta anticipada. Maneja las siguientes politicas como estrategia de marketing: 

    * Los lunes las entradas son a mitad de precio. 
    * Los martes los estudiantes tienen mitad de precio. 
    * Los miercoles, si ese dia la pelicula se presenta el pre-estreno tiene un importe adicional del 30%.
    * Los jueves las mujeres tienen un 30% de porcentaje. 
    * Para el resto de dias, los niños menores de 8 años tienen un porcentaje del 20% adicional a cualquier porcentaje otorgado segun aplique. 
    * Para cualquier dia, exceptuando los lunes y jueves los adultos con edad igual o mayor a 60 años tienen un 40% de porcentaje. 
    * Ademas la empresa esta otorgando un numero de ticket del 1 al 31. En caso de que el ticket tenga el numero 21 el usuario obtendra la entrada gratuita (este numero de ticket se general al azar). 
    * Suponga que en todas, el precio del boleto general es de 10$ USD. 
    * Premisa: El usuario solo puede comprar una entrada a la vez.

 1.- Solicite al usuario ingrese el dia para el que requiere la compra, inclusive si es el mismo dia que indique que dia es. Utilice prompt para este fin. Ademas solicite la edad del mismo, o la edad del usuario que reclamará la validez de su entrada.

2.- Solicite al usuario con el uso de "confirm" su sexo (por ej.: Es usted mujer?), con otro" confirm si es estudiante.

3.- En caso de que la entrada sea de un miercoles debe preguntar si la pelicula esta en pre-estreno. (asumimos aqui que el usuario conoce la respuesta correcta).

4.- Establezca en el codigo la logica necesaria para la asignacion del numero del ticket indicado en el requerimiento general. Use el metodo Math.random() y los que considere necesarios, recuerde que el numero debe ser un numero sin decimales (entero).

5.- Indique todos los datos ingresados por el usuario (debidamente transformados, es decir dependiendo del resultado de un prompt o confirm debe trabajar el resultado para mostrar un resultado congruente y entendible) y mostrar los resultados de los calculos en la consola usando el console.log y la interpolacion. El monto a pagar y la informacion suministrada por el usuario debe mostrar en un resumen al final a traves de un alert().
*/

// Declaracion de Variables
var diaHoy = false;
var diaCompra;
var edad = 0;
var esMujer;
var esEstudiante;
var preEstreno=false;
var ticket;
var precio = 10;
var porcentaje = 0;
var descuento = 0;
var total = 0;
var datoIncorrecto = true;
var dia;
var genero;

// Entrada de Datos
while (datoIncorrecto) {
    diaCompra = prompt("Bienvenido, Indique que dia que desea Comprar la Entrada(1=Lunes, 2=Martes, 3=Miercoles, 4=Jueves, 5=Viernes, 6=Sábado, 7=Domingo):");
    if (diaCompra != null && diaCompra != "") {
        if (confirm("¿Ese dia es Hoy?")) {
            diaHoy = true;
        }
        datoIncorrecto = false;
    } else {
        alert("Debe ingresar un dato valido. Intente de nuevo.");
    }
}

datoIncorrecto = true

while (datoIncorrecto) {
    edad = prompt("Indique la edad de su usuario:");
    if (edad != null && edad != "") {
        datoIncorrecto = false;
        edad = Math.floor(parseInt(edad));
    } else {
        alert("Debe ingresar un dato valido. Intente de nuevo.");
    }
}

esMujer = confirm("Es Mujer?");
esEstudiante = confirm("Es Estudiante?");

//Procesos

// Evaluando descuentos por dias
if (diaCompra == 1) {
    dia = "Lunes";
    porcentaje = 0.5;
} else {
    if (diaCompra == 2) {
        dia = "Martes";
        if (esEstudiante) {
            porcentaje = 0.5;
        }
    } else {
        if (diaCompra == 3) {
            dia = "Miercoles";
            if (preEstreno = confirm("Viene al Pre-Estreno?")) {
                porcentaje = 0.3;
            }
        } else {
            if (diaCompra == 4) {
                dia = "Jueves";
                if (esMujer) {
                    porcentaje = 0.3;
                }
            } else {
                if (diaCompra == 5) {
                    dia = "Viernes";
                } else {
                    if (diaCompra == 6) {
                        dia = "Sabado";
                    } else {
                        if (diaCompra == 7) {
                            dia = "Domingo";
                        }
                    }
                }
            }
        }
    }
}
if (diaHoy) {
    dia = "Hoy";
}
if (esMujer) {
    genero = "Femenino";
} else {
    genero = "Masculino";
}
// Evaluando descuentos por edad
if (edad <= 8) {
    if (preEstreno) {
        porcentaje = 0.1;
    } else {
        porcentaje += 0.2;
    }
}
if (edad >= 60 && (diaCompra != 1 || diaCompra != 4)) {
    porcentaje = 0.4
}

// Calculando ticket Ganador
ticket = Math.random * (31 - 1) + 1
ticket = Math.round(ticket)
if (ticket == 21) {
    alert("Felicidades, Obstuviste el Ticket Ganador y tu entrada es gratuita");
    porcentaje = 1
}

descuento = precio * porcentaje
if (preEstreno) {
    total = precio + descuento
} else {
    total = precio - descuento
}

// Salida de Datos
console.log(`Precio de la Entrada: ${precio}`);
console.log(`Porcentaje de Descuento: ${porcentaje}`);
console.log(`Monto de Descuento: ${descuento}`);
console.log(`Total a Pagar: ${total}`);

alert(`El monto total a pagar es: ${total}; por su entrada para el dia: ${dia}; El Cliente es de genero: ${genero}; Es Estudiante? ${esEstudiante}; La Pelicula es un Pre-Estreno? ${preEstreno}`);

