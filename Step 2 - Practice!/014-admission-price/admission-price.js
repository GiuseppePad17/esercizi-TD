let age;
let price = 0;


while(true){

    age = prompt("Inserisci l'età della persona che deve entrare allo zoo");
    age = Number(age); // funzione che Converte age da string a number

    if (age === 0) { // Condizione per uscire dal ciclo
        break;
    }

    //vado a sommare sulla variabile age in base all'età +=
    if (age <= 2) {
        price += 0.00;
        console.log("età: "+age)
    } else if (age >= 65) {
        price += 18.00;
        console.log("età: "+age)
    } else if (age >= 3 && age <= 12) {
        price += 14.00;
        console.log("età: "+age)
    } else {
        price += 23.00;
        console.log("età: "+age)
    }
}



console.log("Prezzo totale: "+price+"$")