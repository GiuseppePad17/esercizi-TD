

const row = ['1','2','3','4','5','6','7','8'];
const columns = ['a','b','c','d','e','f','g','h'];


const letter = prompt("inserisci la lettera della colonna");
const number = prompt("inserisci il numero della riga");


console.log(typeof letter)

/*
if (number%2 == 0 ){
    window.alert("La casella è bianca")
}else{
    window.alert("La casella è nera")
}*/

const index = columns.indexOf(letter);

if (index !== -1) {
  console.log(`La lettera '${letter}' si trova nell'indice ${index}.`);
} else {
  console.log(`La lettera '${letter}' non è presente nell'array.`);
}