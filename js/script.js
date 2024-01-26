// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
let kmAmmount = prompt('inserisci qui i KM da percorrere')
console.log(kmAmmount)

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
let age = prompt('inserisci qui la tua età')
console.log(age)

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let price = kmAmmount * 0.21
console.log(price)

// va applicato uno sconto del 20% per i minorenni
let discount20 = price - (price * 0.2)
console.log(discount20)

// va applicato uno sconto del 40% per gli over 65.
let discount40 = price - (price * 0.4)
console.log(discount40)



// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.






