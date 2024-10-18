function  shippingCalculator(numberOfItems){
  // costi delle spedizioni
    const firstItem = 10.99;
    const subsequentItem = 2.99;

    // in base agli articoli acquistati effettuo i calcoli
    if(numberOfItems == 1){
        window.alert("il costo di spedizione è di "+firstItem+"€")
    }else{
        //costo della spedizione base più gli articoli aggiuntivi
        const cost = firstItem + (subsequentItem*(numberOfItems-1));
        window.alert("il costo di spedizione è di "+cost+"€")
    }
}

// richiamo la funzione con il parametro di quanti articoli voglio comprare
shippingCalculator(2);