const minutiConsumati = prompt("Quanti minuti sono stati utilizzati?");
const messagiConsumati = prompt("Quanti messaggi sono stati utilizzati?");

let minutiAggiuntivi=0;
let messaggiAggiuntivi=0;

if(minutiConsumati > 50){
    minutiAggiuntivi = (minutiConsumati-50)*0.25;
}

if(messagiConsumati > 50){
    messaggiAggiuntivi = (messagiConsumati-50)*0.15;
}

const chiamate911 = prompt("Quante chiamate sono state svolte al 911?");
const costoChiamate911 = chiamate911*0.44;


const TariffaBase = 15.00;

console.log("Tariffa base: "+TariffaBase);
console.log("Minuti consumati: "+minutiConsumati);
console.log("Messaggi effettuati: "+messagiConsumati);

console.log("Tariffa minuti extra: "+minutiAggiuntivi+"€");
console.log("Tariffa messaggi extra: "+messaggiAggiuntivi+"€");

console.log("Chiamate fatte al 911: "+ chiamate911);
console.log("Costo chiamate 911: "+ costoChiamate911+"€");



const fattura = costoChiamate911+TariffaBase+minutiAggiuntivi+messaggiAggiuntivi;

const tassa = (fattura*5)/100;
console.log("Tassa: "+ tassa+"€");

console.log("Fattura: "+fattura+"€");