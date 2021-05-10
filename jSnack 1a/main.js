
// snack 1  crea un oggetto di nome palla e inserisci palla e nome 
var palla ={
tipo : " medica ",
peso : "10 kg"
}

//------------------------------------------------------------------------------------

//snack 2 tramite un prompt aggiungi peso alla palla
var nuovoPeso =Number(prompt("aggiungi peso alla palla"))

palla ["peso"]= nuovoPeso + " kg"

console.log(palla);

//------------------------------------------------------------------------------------

//snack 3  

var triangoloRettangolo = {
    base : 10,
    altezza :20,
    Perimetro :"",
    
}

triangoloRettangolo.perimetro=[triangoloRettangolo.base*triangoloRettangolo.altezza /2]
console.log(triangoloRettangolo);


