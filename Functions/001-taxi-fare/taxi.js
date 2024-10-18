// Funzione per calcolare la tariffa del taxi
function taxiFare(distanzaKm) {
    const tariffaBase = 4.00;  // Tariffa base in euro
    const costoPer140m = 0.25; // Costo per 140 metri
    const metriPerKm = 1000;   // Numero di metri in un chilometro

    // Converti la distanza da chilometri a metri
    let distanzaMetri = distanzaKm * metriPerKm;

    // Calcola il numero di segmenti di 140 metri
    let numeroSegmenti = Math.ceil(distanzaMetri / 140);

    // Calcola la tariffa totale
    let tariffaTotale = tariffaBase + (numeroSegmenti * costoPer140m);

    return tariffaTotale.toFixed(2); // Restituisce il risultato con due decimali
}

// Programma principale per dimostrare la funzione
let distanza = 5; // esempio: 5 km
let tariffa = taxiFare(distanza);
console.log("La tariffa totale per " + distanza + " km è: €" + tariffa);
