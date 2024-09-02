
for (let n = 1; n <= 100; n++) {

    if (n % 3 == 0 && n % 5 == 0) { //  verifica se il numero è divisibile sia per 3 che per 5
        console.log("Fizz Buzz");
    } else if (n % 3 == 0) { //  verifica se è divisibile solo per 3
        console.log("Fizz");
    } else if (n % 5 == 0) { //  verifica se è divisibile solo per 5
        console.log("Buzz");
    } else {
        console.log(n); // Se non è divisibile né per 3 né per 5, stampa il numero
    }
}