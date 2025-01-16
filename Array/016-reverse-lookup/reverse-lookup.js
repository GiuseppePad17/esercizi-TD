// Definizione della funzione reverseLookup
function reverseLookup(dictionary, valueToFind) {
  const keys = [];
  for (const [key, value] of Object.entries(dictionary)) {
    if (value === valueToFind) {
      keys.push(key);
    }
  }
  return keys;
}

// Programma principale
// Creazione del dizionario
const sampleDictionary = {
  a: 1,
  b: 2,
  c: 1,
  d: 3,
  e: 4,
};

// Test della funzione reverseLookup
console.log("Esempio 1: Valore presente in più chiavi");
console.log(reverseLookup(sampleDictionary, 1)); // Dovrebbe restituire ['a', 'c']

console.log("Esempio 2: Valore presente in una singola chiave");
console.log(reverseLookup(sampleDictionary, 2)); // Dovrebbe restituire ['b']

console.log("Esempio 3: Valore non presente nel dizionario");
console.log(reverseLookup(sampleDictionary, 5)); // Dovrebbe restituire []
