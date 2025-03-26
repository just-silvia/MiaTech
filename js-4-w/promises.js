// 4 Creare una promessa semplice
/*function newPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise risolta");
        }, 2000);
    })
};
newPromise()
.then((data) => {
    console.log(data);
});*/

// 5 Gestione di una promessa con catch
/*function newPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("promise rifiutata");
        }, 2000);
    })
};
newPromise()
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});*/
// 6 Promessa con finally
/*function newPromise(){
    return new Promise((resolve, reject) => {
        resolve("Ciao!")
    })
};
newPromise()
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("Funziona a prescindere");
});*/

// 7 Catena di promesse semplici
/*function newPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 1000);
    })
};
newPromise()
.then((result) => {
    console.log(result);
    return result * 2;

}).then((result) => {
    console.log(result);
    return result + 3;
    
}).then((result) => {
    console.log(result);
});*/

// 8 Catena di promesse con condizioni 
// attenzione alla consegna, prima crea la funzione che restituisce la promise, 
// poi utilizza then e catch per risolverla, ricordati di manipolare il numero come richiesto
// Creare una funzione che restituisca una promessa che si risolve con un numero dopo 1 secondo. 
// Utilizzare then per creare una catena di promesse che verifichi se il numero è pari o dispari, e manipolare il numero di conseguenza. Stampare il risultato finale.
function newPromise(numero){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero);
        }, 1000);
    })
};
newPromise(9)
.then((numero) => {
    if(numero % 2 === 0){
        console.log("pari");
    }else{
        console.log("dispari");
    }
    return  numero;
}).then(() => {
    console.log("risultato");
});