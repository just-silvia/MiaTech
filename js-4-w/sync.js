// 16 Funzione asincrona semplice
// CORRETTO
/*async function waitMessage(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Messaggio mandato.")
        }, 2000);
    })
};
async function loadMessage(){
    let message = await waitMessage();
    console.log(message);
};*/
// 17 Gestione degli errori con try e catch
/*async function tryOperation(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve("Operazione completata")
            }else{
                reject("Operazione fallita")
            }
        }, 1000)
    });
};
async function loadOperation(success){
    try{
        let response = await tryOperation(success);
        console.log(response);
    }catch(error){
        console.error(error);
    }
};
// operazione completata
loadOperation(true);
// operazione fallita
loadOperation(false);*/
// 18 Funzioni asincrone in serie
async function firstOperation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prima operazione risolta");
        }, 2000);
    })
};
async function secondOperation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Seconda operazione risolta");
        }, 5000);
    })
};
async function loadOperations(){
    let result1 = await firstOperation();
    console.log(result1);
    let result2 = await secondOperation();
    console.log(result2);
};
loadOperations();