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
function newPromise(){
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
});

// 8 Catena di promesse con condizioni
/*let verificaNumero = (numero) => {
    return new Promise((onSuccess) => {
        setTimeout(() => {
            onSuccess(numero);
            console.log(numero);
        }, 1000);
    }).then((numero) => {
        if(numero % 2 === 0){
            console.log("pari");
        }else{
            console.log("dispari");
        }
    }).then(() => {
        console.log("risultato");
    });
};
verificaNumero(6);
verificaNumero(7);*/