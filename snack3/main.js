var invitati = ["marco","giovanni","andrea","ludovico","sebastiano"];
console.log(invitati)
var utente = prompt("inserisci il tuo nome");
console.log(utente)

var verificaNome 
for(var i =0 ; i < invitati.length; i++){

    if(utente == invitati[i]){
    verificaNome = true;
    }
}

if(verificaNome == true){
 alert("bene puoi entrare")
} else {
    alert("non puoi imbucarti")
}