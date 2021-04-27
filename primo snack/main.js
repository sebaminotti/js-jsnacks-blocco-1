var parola1= prompt("prima parola");

 var parola2= prompt("seconda parola");

 if (parola1.length < parola2.length) {

     console.log(parola1 + " questa è più corta");

     console.log(parola2 + " questa è più lunga");
 } 
 else if (parola2.length < parola1.length) {
    console.log(parola2 + " questa è più corta");

    console.log(parola1 + " questa è più lunga");
 } else {
     console.log("le due parole sono uguali");
 }