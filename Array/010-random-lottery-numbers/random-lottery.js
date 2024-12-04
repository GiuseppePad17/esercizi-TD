function extractionNumber() {
  // Dichiaro l'array dove estrarre i numeri
  const numbersLottery = [];

  // Ciclo fino a ottenere 6 numeri unici
  while (numbersLottery.length < 6) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;

    // Aggiungo il numero solo se non è già presente nell'array
    if (!numbersLottery.includes(randomNumber)) {
      numbersLottery.push(randomNumber);
    }
  }

  // Con il metodo sort ordino i numeri in maniera crescente
  numbersLottery.sort((a, b) => a - b);

  console.log("I NUMERI ESTRATTI SONO: " + numbersLottery);
}

// Richiamo la funzione
extractionNumber();
