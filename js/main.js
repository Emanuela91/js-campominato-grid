// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const contenitore = document.querySelector(".container");
for (let i = 1; i <= 100; i++){
    const element = document.createElement('div');
    element.classList.add("box");
    contenitore.append(element);
    element.append(i);
}