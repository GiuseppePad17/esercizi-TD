// Dichiaro le variabili che mi occorrono e le casto in Number per farci le operazioni
let NumberOfDays = parseInt(prompt("Quanti giorni durerà il tuo viaggio?"));
let availableBudget = parseFloat(prompt("Stabilisci quanto budget hai a disposizione per il tuo viaggio"));

console.log("Giorni del viaggio: "+NumberOfDays);
console.log("Budget disponibile: "+availableBudget+"€")

let transportExpenses = 0;
let accommodationExpenses = 0;
let mealsExpenses = 0;

// Effettuo il totale delle varie categorie di variabili Alloggio, trasporti ecc...
for (let i = 1; i <= NumberOfDays; i++) {
    transportExpenses += parseFloat(prompt("Quanti soldi hai speso per i TRASPORTI il giorno "+i+"?"));
    accommodationExpenses += parseFloat(prompt("Quanti soldi hai speso per gli ALLOGGI il giorno "+i+"?"));
    mealsExpenses += parseFloat(prompt("Quanti soldi hai speso per i PASTI il giorno "+i+"?"));
}

// stampo tutto in console per avere un resoconto
console.log("Soldi spesi per i TRASPORTI: "+transportExpenses+"€");
console.log("Soldi spesi per gli ALLOGGI: "+accommodationExpenses+"€");
console.log("Soldi spesi per i PASTI: "+mealsExpenses+"€");

let totalExpenditure = transportExpenses+accommodationExpenses+mealsExpenses;
console.log("Spesa totale: "+totalExpenditure+"€");
window.alert("Hai speso un totale di:"+totalExpenditure+"€");

// con una condizione verifico se ho superoto o meno il budget stampandolo a video
if (availableBudget<totalExpenditure) {
    window.alert("I soldi non sono bastati");
    console.log("I soldi non sono bastati");
} else {
    window.alert("I soldi sono bastati");
    console.log("I soldi sono bastati");
}
