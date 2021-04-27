var dispari = [];
var pari = [];

for(var i = 0; i< 6 ; i++){
 var numeroUtente = Number(prompt("inserisci un numero"));
 console.log(numeroUtente);
if (numeroUtente % 2 != 0){
    dispari.push(numeroUtente);
} else {
  pari.push(numeroUtente)   
}
}

console.log(pari, dispari)