//dichiaro le mie variabili
let vowel = ["a", "e", "i", "o", "u"];
let consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let y = "y";

let letter = prompt("Inserisci una lettera:");

//effettuo i controlli della Y
if(letter == y){
    window.alert(letter+" può essere sia una vocale che una consonante");
}

/*  ciclo su tutti gli elementi del mio array per effettuare i controlli delle vocali e
    faccio lo stesso per le consonanti  */
vowel.forEach(element => {
    if (element==letter){
        window.alert(letter+" è una vocale");
    }
});


consonant.forEach(element => {
    if (element==letter){
        window.alert(letter+" è una consonante");
    }
});