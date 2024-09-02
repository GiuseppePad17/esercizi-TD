const word = prompt("Scrivi una parola e ti dirò se è palindroma")

const reverseWord = word.split('').reverse().join('');

if(word == reverseWord){
    console.log(word+" è una parola PALINDROMA")
}else{
    console.log(word+" NON è una parola PALINDROMA")
}
