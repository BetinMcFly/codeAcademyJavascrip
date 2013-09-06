var atacar = true; //La variable atacar es true
var tuAciertas = Math.floor(Math.random() * 2); //La variable tuAciertas usa el metodo Random el cual regresa un número entre el 0 y el 1 exclusivamente, despúes el metodo floor lo redondea al entero mas cercano mas bajo el cual es multlicaod por dos
var dannoEsteRound = Math.floor(Math.random() * 5 + 1); //La variable dannoEsteRound usa el metodo Random el cual regresa un número entre el 0 y el 1 exclusivamente, despúes el metodo floor lo redondea al entero mas cercano mas bajo l cual es multlicaod por cinco y le suman uno
var dannoTotal = 0; //La variable dannoTotal es igual a cero

while (atacar) {
  if (tuAciertas) {
    console.log("Lograste golpear y le hiciste" + dannoEsteRound + " daño!");
    dannoTotal += dannoEsteRound;
    if (dannoTotal >= 4) {
      console.log("Lo hiciste! venciste al dragon!");
      atacar = false;
    } else {
      tuAciertas = Math.floor(Math.random() * 2);
    }
    } else {
    console.log("El dragon te hizo cenizas! Estas frito .");
    atacar = false;
  }
}