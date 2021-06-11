//TODO Un alert() espone 5 numeri generati casualmente.
//TODO Da li parte un timer di 30 secondi.
//TODO Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//TODO Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//* dichiaro le variabili globali principali
var arrayRndNum = [];
var quantityNum = 5;
var numMin = 1;
var numMax = 100;

//* creo n numeri casuali (n = quantityNum)
while (arrayRndNum.length < quantityNum){
    var numero = rndNum(numMin,numMax);
    if(!arrayRndNum.includes(numero)){
        arrayRndNum.push(numero);
    }
}
console.log(arrayRndNum);






















//! ------Sezione per le funzioni------
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}