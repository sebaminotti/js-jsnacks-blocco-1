// var numeroUtente = prompt("inserisci un numero");
// console.log(numeroUtente)
// var somma = 0;

// for(var i = 0;i < numeroUtente.length;i++) {

// somma = somma+parseInt(numeroUtente[i]);

// }

// alert( "il totale del numero da te inserito è " + somma);
// console.log(somma)




//snack 7 

// for(var i = 1; i< 1000; i++){
// console.log(Math.pow(2,i));

// }

var numeriInseriti = [];
var somma = 0;

while (somma < 50) {
var numeriUtente = Number(prompt("numero"));

  somma = somma + numeriUtente 

if(somma > 50 ){
    console.log("valore superato");
} else{
  
  numeriInseriti.push(numeriUtente);
  console.log(somma);
}

}
console.log( numeriInseriti);



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var numeroUtente = Number(prompt("inserisci un numero "))


for(var i=1; i <= numeroUtente;i++){
var numeriGenerati = [];


for(var j =0; j <= 9; j++ ){
    
    numeriGenerati.push(generaNumeri(1,100));
      
      
}
console.log(numeriGenerati)
}



function generaNumeri(min, max){

    return Math.floor(Math.random()*(max - min +1)+ min)
}


