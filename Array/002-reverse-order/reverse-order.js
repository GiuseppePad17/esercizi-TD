//dichiaro l'array per memorizzare i valori
const numbers = [];

while (true) {
  const userInput = prompt(
    "Inserisci un numero intero, oppure 0 per terminare"
  );
  const number = parseInt(userInput);

  if (number === 0) {
    break; // esce dal ciclo se l'utente inserisce 0
  }

  if (!isNaN(number)) {
    // aggiungi solo se è un numero valido
    numbers.push(number);
  } else {
    console.log("Per favore, inserisci un numero valido.");
  }
}

//Mostro i risultati dell'array sia ordinato che non
console.log("Numeri inseriti:", numbers);
console.log(
  "Numeri inseriti ordinamento decrescente:",
  numbers.sort((a, b) => b - a)
);
