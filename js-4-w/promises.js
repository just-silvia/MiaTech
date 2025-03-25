// 4 Creare una promessa semplice
let promise = new Promise((onSuccess, onError) => {
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
);