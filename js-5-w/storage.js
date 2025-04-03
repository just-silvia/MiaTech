// 2 Utilizzare il localStorage
// funzione che salva(set) il valore in localStorage
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`set ${key} = ${value}`);
};
// funzione che recupera(get) la chiave in localStorage
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value !== null) {
        console.log(`get ${key} = ${value}`);
        return value;
    } else {
        console.log(`${key} non trovato.`);
        return null;
    }
};
// funzione che rimuove(delete) in localStorage
function deleteLocalStorage(key) {
    localStorage.removeItem(key);
    console.log(`delete ${key}`);
};
// test
document.addEventListener("DOMContentLoaded", () => {
    setLocalStorage("utente", "Silvia");
    getLocalStorage("utente");
    deleteLocalStorage("utente");
    getLocalStorage("utente");
});
// 3 Utilizzare il sessionStorage
// funzione che salva(set) il valore in sessionStorage
function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`set ${key} = ${value}`);
};
// funzione che recupera(get) la chiave in sessionStorage
function getSessionStorage(key) {
    let value = sessionStorage.getItem(key);
    if (value !== null) {
        console.log(`get ${key} = ${value}`);
        return value;
    } else {
        console.log(`${key} non trovato.`);
        return null;
    }
};
// funzione che rimuove(delete) in sessionStorage
function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
    console.log(`delete ${key}`);
};
// test
document.addEventListener("DOMContentLoaded", () => {
    saveSessionStorage("utente", "Silvia");
    getSessionStorage("utente");
    removeSessionStorage("utente");
    getSessionStorage("utente");
});
// 4 Utilizzare localStorage e sessionStorage insieme
// funzione che salva(set) il valore in entrambi
function saveStorage(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log(`set ${key} = ${value} in storage`);
};
// funzione che recupera(get) la chiave in entrambi
function getStorage(key) {
    let localValue = localStorage.getItem(key);
    let sessionValue = sessionStorage.getItem(key);
    if (localValue !== null || sessionValue !== null) {
        console.log(`get ${key} = ${localValue}`);
        console.log(`get ${key} = ${sessionValue}`);
        return {localValue, sessionValue};
    } else {
        console.log(`${key} non trovato.`);
        return null;
    }
};
// funzione che rimuove(delete) in entrambi
function removeStorage(key) {
   localStorage.removeItem(key);
   sessionStorage.removeItem(key);
   console.log(`delete ${key}`);
};
// test
document.addEventListener("DOMContentLoaded", () => {
    saveStorage("utente", "Silvia");
    getStorage("utente");
    removeStorage("utente");
    getStorage("utente");
});