// 4 Creare una promessa semplice
function newPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise risolta");
        }, 2000);
    })
};
newPromise()
.then((data) => {
    console.log(data);
});

// 5 Gestione di una promessa con catch
/*let promise = new Promise((onSuccess, onError) => {
    setTimeout(() => {
        onError(new Error("errore"))
    }, 2000);
});
promise.catch(
    error => console.error(error.message)
);*/
// 6 Promessa con finally
/*let promise = new Promise((onSuccess, onError) => {
    onSuccess("Ciao!")
});
promise.finally(
    console.log("promise finalizzata")
);
promise.then(
    onSuccess => console.log(onSuccess)
);*/
// 7 Catena di promesse semplici
/*new Promise((onSuccess, onError) => {
    setTimeout(() => onSuccess(2), 1000);

}).then((result) => {
    console.log(result);
    return result * 2;

}).then((result) => {
    console.log(result);
    return result + 3;
    
}).then((result) => {
    console.log(result);
});*/
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