// Array di oggetti JSON con informazioni sulle proiezioni
const proiezioni = [
  {
    titolo: "Il Signore degli Anelli: La Compagnia dell'Anello",
    orario: "18:30",
    cinema: "Cinema Paradiso",
    postiDisponibili: 20,
    prenotazioni: [],
  },
  {
    titolo: "Avatar: La Via dell'Acqua",
    orario: "20:00",
    cinema: "Cinema Galaxy",
    postiDisponibili: 15,
    prenotazioni: [],
  },
  {
    titolo: "Top Gun: Maverick",
    orario: "21:00",
    cinema: "Cinema Centrale",
    postiDisponibili: 10,
    prenotazioni: [],
  },
];

// Ciclo for per scorrere l'array e stampare le informazioni
for (let i = 0; i < proiezioni.length; i++) {
  const proiezione = proiezioni[i];
  console.log(`Titolo: ${proiezione.titolo}`);
  console.log(`Orario: ${proiezione.orario}`);
  console.log(`Cinema: ${proiezione.cinema}`);
  console.log(`Posti Disponibili: ${proiezione.postiDisponibili}`);
  console.log("------------------------");
}

// Funzione per prenotare posti
function prenotaPosti() {
  console.log("Proiezioni disponibili:");
  for (let i = 0; i < proiezioni.length; i++) {
    console.log(
      `${i + 1}. ${proiezioni[i].titolo} - Orario: ${
        proiezioni[i].orario
      } - Cinema: ${proiezioni[i].cinema} - Posti Disponibili: ${
        proiezioni[i].postiDisponibili
      }`
    );
  }

  // Simuliamo una selezione da parte dell'utente
  const scelta =
    parseInt(
      prompt("Inserisci il numero della proiezione desiderata (1, 2, 3):")
    ) - 1;

  if (scelta >= 0 && scelta < proiezioni.length) {
    const proiezioneSelezionata = proiezioni[scelta];
    console.log(`Hai selezionato: ${proiezioneSelezionata.titolo}`);

    const postiRichiesti = parseInt(
      prompt(
        `Quanti posti vuoi prenotare? (Disponibili: ${proiezioneSelezionata.postiDisponibili}):`
      )
    );

    if (
      postiRichiesti > 0 &&
      postiRichiesti <= proiezioneSelezionata.postiDisponibili
    ) {
      const nomeUtente = prompt("Inserisci il tuo nome per la prenotazione:");
      proiezioneSelezionata.postiDisponibili -= postiRichiesti;
      proiezioneSelezionata.prenotazioni.push({
        nome: nomeUtente,
        posti: postiRichiesti,
      });

      console.log(
        `Prenotazione confermata per ${nomeUtente}. Posti prenotati: ${postiRichiesti}`
      );
    } else {
      console.log(
        "Non ci sono abbastanza posti disponibili o il numero inserito non è valido."
      );
    }
  } else {
    console.log("Selezione non valida.");
  }
}

// Esegui la funzione per consentire la prenotazione
prenotaPosti();

// Mostra l'aggiornamento delle proiezioni
console.log("Dati aggiornati delle proiezioni:");
console.log(proiezioni);
