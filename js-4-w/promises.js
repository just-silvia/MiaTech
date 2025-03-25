// 4 Creare una promessa semplice
/*let promise = new Promise((onSuccess, onError) => {
    setTimeout(() => {
        onSuccess("risolto")
    }, 2000);
    setTimeout(() => {
        onError("errore")
    }, 2000);
});
promise.then(
    onSuccess => console.log(onSuccess),
    onError => console.error(onError)
);*/
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
let promise = new Promise((onSuccess, onError) => {
    onSuccess("Ciao!")
});
promise.finally(
    console.log("promise finalizzata")
);
promise.then(
    onSuccess => console.log(onSuccess)
);