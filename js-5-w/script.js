// COOKIES
// 1 Gestire i cookies
// funzione per salvare(set) un cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(`${name}=${value}`);
};
// funzione per recuperare(get) un cookie
function getCookie(name){
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for(let c of ca){
        c = c.trim();
        if (c.startsWith(cookieName)){
            let value = c.substring(cookieName.length);
            console.log(`${name}=${value}`);
            return value;
        }
    }
    return "";
};
// funzione per rimuovere(delete) un cookie
function deleteCookie(name) {
    document.cookie = `${name} = ; expires = Mon, 07 Mar 2025 00:00:00 UTC; path=/;`;
    console.log(`${name}`);
};
// test
setCookie("utente", "Silvia", 2);
getCookie("utente");
deleteCookie("utente");