/*let nombre= prompt("Agrega tu nombre");

alert=("hola" + nombre)*/


//Operdaores de Calculo

/*let numero = 10;
numero **= 6
document.write(numero)*/


//concatenacion

/*nombre= "Carlos";
  /*frase= " " + nombre + " estoy caminando";
  frase="soy ${nombre} y estoy caminando";

  document.write(frase);*/

/*Operadores aritmeticos

let numero = 23;
let numero2 = 13;
let texto = "texto 1";
let texto2 = "texto 1";

document.write(numero==numero2)
document.write(texto == texto2)
document.write(numero<=numero2)
*/

/* Condicionales

nombre="David"

if (nombre=="Carlos"){
    alert("hola");
    document.write(alert)
}
else if (nombre =="David") {
    alert("Tu nombre es " + nombre)
}
*/
//Ejercicio # 1

dineroCofla = prompt("Cuanto dinero Tienes Cofla ");
dineroRoberto = prompt("Cuanto dinero Tienes Roberto ");
dineroPedro = prompt("Cuanto dinero Tienes Pedro ");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de mango");
    alert("Y te sobran" + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate el helado de crema")
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate el helado de Vainilla")
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate el helado de fresa")
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate el helado de Mantecado")
} else if (dineroCofla >= 2.9) {
    alert("Comprate el helado de Confites o el pote de 1.4kg");
} else {
    alert("Lo sentimos, no puedes comprar nada")
}

//Roberto
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Comprate el helado de mango")
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Comprate el helado de crema")
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Comprate el helado de Vainilla")
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Comprate el helado de fresa")
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Comprate el helado de Mantecado")
} else if (dineroRoberto >= 2.9) {
    alert("Comprate el helado de Confites o el pote de 1.4kg");
} else {
    alert("Lo sentimos, no puedes comprar nada")
}

//Pedro

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Comprate el helado de mango")
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Comprate el helado de crema")
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Comprate el helado de Vainilla")
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Comprate el helado de fresa")
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Comprate el helado de Mantecado")
} else if (dineroPedro >= 2.9) {
    alert("Comprate el helado de Confites o el pote de 1.4kg");
} else {
    alert("Lo sentimos, no puedes comprar nada")
}