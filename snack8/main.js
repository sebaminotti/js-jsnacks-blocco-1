var numeroUtente = prompt("inserisci un numero");
console.log(numeroUtente)
var somma = 0;

for(var i = 0;i < numeroUtente.length;i++) {

somma = somma+parseInt(numeroUtente[i]);

}

alert( "il totale del numero da te inserito è " + somma);
console.log(somma)