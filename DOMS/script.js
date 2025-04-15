// 6 getElementById
/*let $paragraph = document.getElementById("paragraph");
// aggiungo eventListener
$paragraph.addEventListener("click", () => {
    console.log("Paragraph clicked!");
});*/
// 7 querySelector
/*let $button = document.querySelector("#button");
// aggiungo eventListener
$button.addEventListener("click", () => {
    console.log("Button clicked!");
});
// 8 Modifica il testo di un paragrafo
let $paragraph = document.getElementById("paragraph");
// aggiungo eventListener
$paragraph.addEventListener("click", () => {
    $paragraph.innerText = "cliccato!";
});*/
// 9 Cambia lo stile
/*
let $paragraph = document.getElementById("paragraph");
$paragraph.style.backgroundColor = "tomato";
$paragraph.style.fontSize = "30px";      
*/
// 10 Modifica l'HTML
/*let $paragraph = document.getElementById("paragraph");
// aggiungo un bottone nel paragrafo
$paragraph.innerHTML += '<button id="myButton">Nuovo Bottone</button>';
// funzione che aggiunge il bottone dopo aver cliccato
function addButtonEventListener() {
    let $myButton = document.getElementById("myButton");
    // aggiungo l'evento al bottone
    $myButton.addEventListener("click", () => {
        console.log("Bottone aggiunto!");
    });
};*/
// 11 Crea una lista
/*const newList = document.createElement("ul");
const elements = ["Blu", "Giallo", "Rosa"];
elements.forEach(function(item){
    const li = document.createElement("li");
    li.textContent = item;        
    ul.appendChild(li);            
});
document.body.appendChild(newList);
// 12 Crea i list items
const moreElements = ["Verde", "Rosso", "Grigio", "Azzurro", "Marrone"];
moreElements.forEach(function(item){
    const li = document.createElement("li");
    li.textContent = item;
    newList.appendChild(li);
});*/
// 12 submit
