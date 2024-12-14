//dichiaro la funzione della creazione della cartella del BINGO
function bingoCardCreation() {
  const cardBINGO = {}; //dichiaro l'oggetto

  // dichiaro gli arrai che verranno popolati con i vari numeri
  const B = [];
  const I = [];
  const N = [];
  const G = [];
  const O = [];

  //popolo gli array ognuno con il suo intervallo di numeri
  for (let i = 0; i < 5; i++) {
    B.push(Math.floor(Math.random() * 15) + 1);
    I.push(Math.floor(Math.random() * (30 - 16 + 1)) + 16);
    N.push(Math.floor(Math.random() * (45 - 31 + 1)) + 31);
    G.push(Math.floor(Math.random() * (60 - 46 + 1)) + 46);
    O.push(Math.floor(Math.random() * (75 - 61 + 1)) + 61);
  }

  // popolo l'oggetto assegnandoli gli array come valore
  cardBINGO["B"] = B;
  cardBINGO["I"] = I;
  cardBINGO["N"] = N;
  cardBINGO["G"] = G;
  cardBINGO["O"] = O;

  //stampo l'oggetto
  console.log(cardBINGO);
}

bingoCardCreation();

/*
    DA FINIRE
    controllare se ci sono numeri duplicati nello stesso array,
    scrivere funzione che visualizzi la cartella con le colonne etichettate in modo appropriato.
*/
