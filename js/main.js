const numBox=document.getElementById("numeri");

// creazione array numeri random
const numeri = [];
for (let i = 0; i <5; i++) {
    numeri.push(getRndInteger(1,100));
}
numBox.innerText="i numeri sono: " +numeri;
console.log(numeri);

let risultati=0;

// timeout scomparsa numeri

setTimeout (function() {
    numBox.classList.add("hide");

    // timeout comparsa prompt

    setTimeout (function() {

        // ciclo generazione prompt
    for (let i = 0; i < 5; i++) {

        let nMemo=parseInt(prompt("inserisci uno dei 5 numeri"));

        // check numeri utente in array
        if (numeri.includes(nMemo)==true) {
            risultati++;
        };
    };

    // stampa risultati
    numBox.innerText=`hai indovinato ${risultati} numeri`;
    numBox.classList.remove("hide");

    }, 1000);

}, 5*1000);



// FUNZIONI


// genera numeri casuali ripetibili
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }