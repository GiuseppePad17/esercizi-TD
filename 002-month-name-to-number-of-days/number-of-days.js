window.alert("Inserisci il nome del mese e ti restituisco il numero di giorni");
let month = prompt("Inserisci il mese");

const months = {
    Gennaio: 31,
    Febbraio: "bisestile",
    Marzo: 31,
    Aprile: 30,
    Maggio: 31,
    Giugno: 30,
    Luglio: 31,
    Agosto: 31,
    Settembre: 30,
    Ottobbre: 31,
    Novembre: 30,
    Dicembre: 31
};


 // Normalizza l'input dell'utente per gestire le maiuscole/minuscole
 let normalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

 if (months[normalizedMonth] !== undefined) {
     let giorni = months[normalizedMonth];
     if (giorni === "bisestile") {
         window.alert(`${normalizedMonth} ha 28 giorni, o 29 in anni bisestili.`);
     } else {
         window.alert(`${normalizedMonth} ha ${giorni} giorni.`);
     }
 } else {
     window.alert("Il mese inserito non è valido. Assicurati di inserire il nome del mese correttamente.");
 }