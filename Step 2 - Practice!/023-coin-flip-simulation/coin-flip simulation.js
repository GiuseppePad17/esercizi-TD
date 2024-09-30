const head = "H";
const tails = "T";

window.alert("Qual è il numero minimo di volte in cui devi lanciare una moneta prima di poter avere tre lanci consecutivi che diano lo stesso risultato (o tutti e tre sono testa o tutti e tre sono croce)? Qual è il numero massimo di lanci che potrebbero essere necessari? Quanti lanci sono necessari in media? In questo esercizio esploreremo queste domande creando un programma che simula diverse serie di lanci di monete.");
window.alert("Premi OK per lanciare la moneta");


let result = Math.random() < 0.5 ? head : tails;
console.log(result)