// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let button = document.getElementById("play");
const contenitore = document.querySelector(".container");

button.addEventListener("click",
    function(){
        contenitore.innerHTML = '';
        console.clear();
        contenitore.classList.add("active");
    

        for (let i = 1; i <= 100; i++){
            const element = document.createElement('div');
            element.classList.add("box");
            contenitore.append(element);
            element.append(i);

            element.addEventListener("click",
                function(){
                    element.classList.toggle("clicked");
                    console.log(i);
                }
                
            );
        };
    }
)

