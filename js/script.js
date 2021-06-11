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
alert('Questi sono i numeri che ti devi ricordare: ' + arrayRndNum);


var time = 30;
var countDown = setInterval(function(){
    console.log(time);
    time--;
    if(!time){
        clearInterval(countDown);
        game();
    }
}, 1000);


//! ------Sezione per le funzioni------
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function game(){
    var tentativi = quantityNum;
    var numeriUser = [];
    for(var i = tentativi; i > 0; i--){
        var numCheck = parseInt(prompt('Inserisci uno alla volta i numeri che ricordi: tentativi rimasti = ' + i));
        if(numeriUser.includes(numCheck)){
            alert('Attenzione: il numero "' + numCheck + '" era già stato inserito. Hai perso un tentativo!');
        }
        else if(isNaN(numCheck)){
            alert('Attenzione: il valore inserito NON è un numero. Hai perso un tentativo!');
        }
        else if(arrayRndNum.includes(numCheck)){
            numeriUser.push(numCheck);
        }
    }

    result(numeriUser);
}

function result(arrayWin){

    console.log('Sei riuscito a trovare ' + arrayWin.length + ' numeri su ' + quantityNum);
    console.log('I numeri da te trovati sono i seguenti: ' + arrayWin);

}