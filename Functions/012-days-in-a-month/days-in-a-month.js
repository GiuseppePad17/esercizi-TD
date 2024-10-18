function daysInaMonth(month, year){

    // Verifica se l'anno è bisestile
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " è un anno bisestile.");
            } else {
                console.log(year + " non è un anno bisestile.");
            }
        } else {
            console.log(year + " è un anno bisestile.");
        }
    } else {
        console.log(year + " non è un anno bisestile.");
    }

    // lista dei mesi con il corrispettivo numero di giornio, su Febbraio ulteriore controllo
    switch (month) {
        case 1:
            console.log("Gennaio ha 31 giorni")
            break;

        case 2:
            if (year % 4 === 0) {
                if (year % 100 === 0) {
                    if (year % 400 === 0) {
                        console.log("Febbraio ha 29 giorni");
                    } else {
                        console.log("Febbraio ha 28 giorni");
                    }
                } else {
                    console.log("Febbraio ha 29 giorni");
                }
            } else {
                console.log("Febbraio ha 28 giorni");
            }
            break;
        case 3:
            console.log("Marzo ha 31 giorni")
            break;
        case 4:
            console.log("Aprile ha 30 giorni");
            
            break;
        case 5:
            console.log("Maggio ha 31 giorni")
            break;
        case 6:
            console.log("Giugno ha 30 giorni");
            
            break;
         case 7:
            console.log("Luglio ha 31 giorni")
            break;
        case 8:
            console.log("Agosto ha 31 giorni")
            break;
        case 9:
            console.log("Settembre ha 30 giorni");
            
            break;
        case 10:
            console.log("Ottobre ha 31 giorni")
            break;
        case 11:
            console.log("Novembre ha 30 giorni");
            
            break;
        case 12:
            console.log("Dicembre ha 31 giorni")
            break;

    }
}


daysInaMonth(2, 2001);