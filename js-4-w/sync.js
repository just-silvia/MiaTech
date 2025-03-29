// 16 Funzione asincrona semplice
async function waitMessage(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Messaggio mandato."), 2000)
    });

    let message = await promise;
    console.log(message);
};
waitMessage();