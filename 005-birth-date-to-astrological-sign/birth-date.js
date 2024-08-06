
const day = parseInt(prompt("Inserisci giorno di nascita:"));
const month = prompt("Inserisci mese di nascita:");

if ((month === "Marzo" && day >= 21) || (month === "Aprile" && day <= 19)) {
    window.alert("Ariete");
} else if ((month === "Aprile" && day >= 20) || (month === "Maggio" && day <= 20)) {
    window.alert("Toro");
} else if ((month === "Maggio" && day >= 21) || (month === "Giugno" && day <= 20)) {
    window.alert("Gemelli");
} else if ((month === "Giugno" && day >= 21) || (month === "Luglio" && day <= 22)) {
    window.alert("Cancro");
} else if ((month === "Luglio" && day >= 23) || (month === "Agosto" && day <= 22)) {
    window.alert("Leone");
} else if ((month === "Agosto" && day >= 23) || (month === "Settembre" && day <= 22)) {
    window.alert("Vergine");
} else if ((month === "Settembre" && day >= 23) || (month === "Ottobre" && day <= 22)) {
    window.alert("Bilancia");
} else if ((month === "Ottobre" && day >= 23) || (month === "Novembre" && day <= 21)) {
    window.alert("Scorpione");
} else if ((month === "Novembre" && day >= 22) || (month === "Dicembre" && day <= 21)) {
    window.alert("Sagittario");
} else if ((month === "Dicembre" && day >= 22) || (month === "Gennaio" && day <= 19)) {
    window.alert("Capricorno");
} else if ((month === "Gennaio" && day >= 20) || (month === "Febbraio" && day <= 18)) {
    window.alert("Acquario");
} else if ((month === "Febbraio" && day >= 19) || (month === "Marzo" && day <= 20)) {
    window.alert("Pesci");
} else {
    window.alert("Data non valida");
}