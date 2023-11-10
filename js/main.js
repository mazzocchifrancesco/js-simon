const numBox=document.getElementById("divNumber");

// creazione array numeri random
const fiveNumber = listaNumeri();

numBox.innerText="i numeri sono: " +fiveNumber;
console.log(fiveNumber);

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
        if (fiveNumber.includes(nMemo)==true) {
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
  };

//   genera array numeri diversi

function listaNumeri() {
    let i = 1
    let numeri = [];
    do {
        const rNum=getRndInteger(1, 100);
        if (numeri.includes(rNum)) {}
        else {
            numeri.push(rNum);
            i++;
        };
    } while (i <= 5);
    return numeri;
};