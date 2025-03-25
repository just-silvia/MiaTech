// CALLBACKS
// 1. Funzione di base con callback
/*const somma = (a, b, callback) => {
    callback(a + b);
};
somma(2, 2, (risultato) => {
    console.log(risultato)
});*/
// 2. Funzione con callback e passaggio di parametri
/*const operazioni = (a, b, operazione, callback) => {
    if(operazione === "moltiplicazione"){
        callback(a * b);
    }
    if(operazione === "addizione"){
        callback(a + b);
    }
    if(operazione === "divisione"){
        callback(a / b);
    }
};
operazioni(2, 5, "moltiplicazione", (risultato) => {
    console.log(risultato)
});
operazioni(2, 8, "addizione", (risultato) => {
    console.log(risultato)
});
operazioni(20, 2, "divisione", (risultato) => {
    console.log(risultato)
});*/
// 3 Callback annidati
const time = (callback) => {
    setInterval(() => {
        callback("intervallo di 2 secondi")
    }, 2000);

    setTimeout(() => {
        clearInterval(time);
        callback("fine intervallo");
    }, 6000);
};
time((message) => {
    console.log(message);
});