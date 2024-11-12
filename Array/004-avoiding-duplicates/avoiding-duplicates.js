//dichiaro l'array
const words = [];
const words_without_duplicates = [];

//creo un loop infinito
while (true) {
  const word = prompt("Scrivi una parola");

  //controllo per uscire se non si scrive nulla
  if (word === "") {
    break;
  }

  if (!words.includes(word)) {
    words_without_duplicates.push(word);
  }

  //inserisci la parola nell'array
  words.push(word);
}

//stampa l'array in console
console.log("Lista parole: " + words);
console.log("Lista senza duplicati: " + words_without_duplicates);
