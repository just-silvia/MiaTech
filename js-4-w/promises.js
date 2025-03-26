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
/*function newPromise(numero){
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
});*/

// 9 Catena di promesse con gestione di errori
/*function newPromise(){
    return new Promise((resolve, reject) => {
        const value = Math.random();
        console.log(value);
        if(value > 0.2){
            resolve(value);
        }else{
            reject("valore rifiutato");
        }
    })
};
newPromise()
.then((value) => {
    console.log("primo valore valido");
    return value * 2
}).then((newValue) => {
    console.log("valore finale accettato");
    return newValue - 1
}).catch((error) => {
    console.error("Valore non valido", (error));
}).then((newValue) => {
    console.log("primo valore valido");
    return newValue * 4
}).finally(() => {
    console.log("Fine");
});*/
// 10 Gestione degli errori con catch
/*function newPromise(){
    return new Promise((resolve, reject) => {
        reject("Si è verificato un errore");
    })
};
newPromise()
.then(() => {
    console.log("Questa promessa non viene eseguita")
}).catch((error) => {
    console.error(error)
}).finally(() => {
    console.log("fine")
});*/
// 11 Gestione degli errori con then e catch
function newPromise(siRisolve){
    return new Promise((resolve, reject) => {
        if(siRisolve === true){
            resolve("Operazione eseguita")
        }
        if(siRisolve === false){
            reject("Operazione fallita");
        }
    })
};
// promessa risolta
newPromise(true)
.then((successMessage) => {
    console.log(successMessage)
})
.catch((errorMessage) => {
    console.error(errorMessage)
})
.finally(() => {
    console.log("operazione completata")
});
// promessa fallita
newPromise(false)
.then((successMessage) => {
    console.log(successMessage)
})
.catch((error) => {
    console.error(error)
})
.finally(() => {
    console.log("operazione completata")
});