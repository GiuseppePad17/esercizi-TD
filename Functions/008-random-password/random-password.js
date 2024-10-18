// Funzione per generare una password casuale
function randomPassword() {
    const minLength = 7;
    const maxLength = 10;
    const asciiStart = 33;  // Carattere ASCII 33 (!)
    const asciiEnd = 126;   // Carattere ASCII 126 (~)

    // Genera una lunghezza casuale tra 7 e 10
    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let password = '';

    // Genera ciascun carattere casualmente dalla tabella ASCII
    for (let i = 0; i < passwordLength; i++) {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * (asciiEnd - asciiStart + 1)) + asciiStart);
        password += randomChar;
    }

    return password;
}

// Programma principale per visualizzare la password generata
let generatedPassword = randomPassword();
console.log("La password generata è: " + generatedPassword);