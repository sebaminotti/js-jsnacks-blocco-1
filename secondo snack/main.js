// il software chiede dieci numeri all'utente e stampa la somma

var somma = 0;

for(var i = 0; i < 10 ; i++ ){
 var number = Number(prompt("inserire numeri grazie"));
 somma = somma + number;
}
console.log(somma);


// var dispari = [];
// var pari = [];
// for (var i = 0; i < 10 ; i++){
//  numero = Number(prompt("inserisci numeri"));

//  if (numero % 2 != 0){
//      dispari.push(numero);
//  } else {
//      pari.push(numero);
//  }
// }
// console.log(dispari,pari);
