function generaPressioniTasti(messaggio) {
  // Mappatura dei caratteri e delle sequenze di tasti
  const mappaTasti = {
    ".": "1",
    ",": "11",
    "?": "111",
    "!": "1111",
    ":": "11111",
    A: "2",
    B: "22",
    C: "222",
    D: "3",
    E: "33",
    F: "333",
    G: "4",
    H: "44",
    I: "444",
    J: "5",
    K: "55",
    L: "555",
    M: "6",
    N: "66",
    O: "666",
    P: "7",
    Q: "77",
    R: "777",
    S: "7777",
    T: "8",
    U: "88",
    V: "888",
    W: "9",
    X: "99",
    Y: "999",
    Z: "9999",
    0: "0",
    " ": "0",
  };

  // Convertiamo il messaggio in maiuscolo per uniformare il processo
  messaggio = messaggio.toUpperCase();

  // Variabile per memorizzare la sequenza finale di pressioni
  let risultato = "";

  // Iteriamo ogni carattere del messaggio
  for (let char of messaggio) {
    // Se il carattere è nella mappa, aggiungiamo la sequenza corrispondente
    if (mappaTasti[char]) {
      risultato += mappaTasti[char];
    }
    // Se il carattere non è nella mappa (ad esempio un carattere speciale non previsto), lo ignoriamo
  }

  return risultato;
}

// Esempio di input (il messaggio che l'utente inserisce)
const messaggio = prompt("Inserisci il messaggio:");

// Chiamata alla funzione per generare la sequenza di tasti
const sequenzaTasti = generaPressioniTasti(messaggio);

// Visualizzare il risultato
alert(sequenzaTasti);
