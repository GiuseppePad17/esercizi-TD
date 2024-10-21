function validPassword(myPassword){

    //espressioni regolari che utilizzo per i controlli
    let regex1 = /[A-Z]/;
    let regex2 = /[a-z]/;
    let regex3 = /[0-9]/

    //controllo la lunghezza della password se ha almeno 8 caratteri
    if (myPassword.length >= 8) {
        //verifico se ha almeno un MAIUSCOLA
        if(regex1.test(myPassword)==true){
            //verifico se ha almeno una minuscola
            if(regex2.test(myPassword)==true){
                //verifico se ha almeno un numero
                if(regex3.test(myPassword)==true){
                    console.log("Password OK")
                }else{
                    console.log("La tua password deve avere almeno un numero")
                }
            }else{
                console.log("la tua password deve avere almeno una lettera minuscola")
            }
        }else{
            console.log("la tua password deve avere almeno una lettera maiuscoala")
        }
    }else{
        console.log("la password deve avere almeno 8 caratteri")
    }

    
}


let password = prompt("Crea la tua password");
validPassword(password);