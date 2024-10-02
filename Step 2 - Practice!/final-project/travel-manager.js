//dichiaro una variabile che mi indica se la Vacanza è in corso oppure no, per mantenere il software attivo
let isVacationOn = true;

//Stabilico il budget della mia vacanza
const availableBudget = parseFloat(prompt("Stabilisci quanto budget hai a disposizione per il tuo viaggio"));


console.log("Budget disponibile: "+availableBudget+"€")

//Dichiaro le Variabili per le categorie (Trasporto, alloggio, pasto)
let transportExpenses = 0;
let accommodationExpenses = 0;
let mealsExpenses = 0;


while(isVacationOn === true){

        console.log(isVacationOn);
        
        transportExpenses += parseFloat(prompt("Quanti soldi hai speso per i TRASPORTI il giorno ?"));
        accommodationExpenses += parseFloat(prompt("Quanti soldi hai speso per gli ALLOGGI il giorno? "));
        mealsExpenses += parseFloat(prompt("Quanti soldi hai speso per i PASTI il giorno ?"));

        console.log("Soldi spesi per i TRASPORTI: "+transportExpenses+"€");
        console.log("Soldi spesi per gli ALLOGGI: "+accommodationExpenses+"€");
        console.log("Soldi spesi per i PASTI: "+mealsExpenses+"€");

        let totalExpenditure = transportExpenses+accommodationExpenses+mealsExpenses;
        console.log("Spesa totale: "+totalExpenditure+"€");

        if (prompt("La vacanza è finita?")==="SI") {
            isVacationOn = false;
        }
        
    
}


