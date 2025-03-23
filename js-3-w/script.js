// 1
/*let numbers = [1, 2, 3, 4, 5];
let [firstNumber, secondNumber] = numbers;
console.log(firstNumber, secondNumber);*/
// 2
/*let numbers = [1, 2, 3, 4, 5];
let [firstNumber, , thirdNumber] = numbers;
console.log(firstNumber, thirdNumber);*/
// 3
/*let numbers = [10,20];
let [a = 10, b = 20, c = 30, d = 40, e = 50] = numbers;
console.log(a, b, c, d, e);*/
// 4
/*let user = {
    nome : "Silvia",
    cognome : "Barbagallo",
    anni : "22",
    hobby : "videogiochi"
};
let {nome, cognome, anni, hobby} = user;
console.log("Ciao! mi chiamo", nome, cognome, "ho", anni, "e adoro i", hobby, "!");*/
// 5
/*let user = {
    nome : "Silvia",
    cognome : "Barbagallo",
    anni : 22,
    hobby : "videogiochi"
};
let {nome : name, cognome, anni : age, hobby} = user;
console.log("Ciao! mi chiamo", name, cognome, "ho", age, "e adoro i", hobby, "!");*/
// 6
/*let fruits = {
    name: "apple",
    color: "red"
}
let {name, color, ...otherInfo} = fruits;
console.log(fruits);
otherInfo.ripening = "ripe";
otherInfo.taste = "sweet";
let updatedFruits = {name, color, ...otherInfo};
console.log(updatedFruits);*/
// 7
/*let myNumbers = [11, 22, 33];
console.log(myNumbers);
let moreNumbers = [...myNumbers, 44, 55, 66]
console.log(moreNumbers);*/
// 8
/*let firstNumber = [11, 5, 2002];
console.log(firstNumber);
let secondNumber = [30, 4, 2000];
console.log(secondNumber);
let allNumbers = [...firstNumber, ...secondNumber];
console.log(allNumbers);*/
// 9
/*let user = {
    name: "Mattia",
    age: 24
}
console.log(user);
let updatedUser = {...user, favColor: "Green"};
console.log(updatedUser);*/
// 10
/*function sum (...theArgs){
    let total = 0;
    for(let i = 0; i < theArgs.length; i++){
        total += theArgs[i];
    }
    return total
}
const result = sum(1, 2, 3);
console.log(result);*/
// 11
/*let numbers = [11, 12, 13, 14, 15, 16];
let [firstNumber, secondNumber, ...rest] = numbers;
console.log(firstNumber); 
console.log(secondNumber); 
console.log(rest);*/
// 12
/*let user = {
    firstName: "Silvia",
    lastName: "Barbagallo",
    age: "22",
    hobby: "videogiochi",
    favColor: "pink"
};
let {firstName, lastName, ...rest} = user;
console.log(firstName); 
console.log(lastName); 
console.log(rest);*/
// 13
/*const user = {
    firstName: "Silvia",
    lastName: "Barbagallo",
    age: 22
};
let json = JSON.stringify(user);
console.log(typeof json);
console.log(json);*/
// 14
/*let userData = '{"firstName":"Silvia","lastName":"Barbagallo","age":22}';
let user = JSON.parse(userData);
console.log(user);*/
// 15
/*let nameList = '[{"name": "Silvia", "age": 22}, {"name": "Giorgia", "age": 36}, {"name": "Federica", "age": 29}, {"name": "Alessandra", "age": 56}, {"name": "Giovanni", "age": 58}]';
let family = JSON.parse(nameList);
family.push({name: "Mattia", age: 24});
let newNameList = JSON.stringify(family);
console.log(newNameList);*/
// 16
/*let nome = "Silvia";
let cognome = "Barbagallo";
let fullName = `${nome} ${cognome}`.toString();
console.log(fullName);*/
// 17
/*let nome = "Silvia";
let cognome = "Barbagallo";
let eta = 22;
let citta = "Milano";
let userInfo = `nome: ${nome}, cognome: ${cognome}, età: ${eta}, città: ${citta}`.toString();
console.log(userInfo);*/
// 18
/*function person(persona){
    return `name: ${persona.name}, age: ${persona.age}, job: ${persona.job}`;
};
const example = {
    name: "Jane",
    age: 29,
    job: "developer"
};
console.log(person(example));*/
// 19
/*let myNumber = 6;
console.log("Ciao! Il mio numero è: ", myNumber);
let myArray = [2, 4, 6, 8];
console.log("Una lista di numeri: ", myArray);
let myObject = {name: "Silvia", surname: "Barbagallo"};
console.log(myObject);*/
// 20
/*// prova console.warn
const user = {
    email: "",
    password: ""
};
// prova console.error
const user = {
    username: "silvia",
    password: "01234"
};
// prova console.log
const user = {
    username: "admin",
    password: "1234"
};

if (!user.username || !user.password) {
    console.warn("attenzione! Inserire le credenziali.");
} else if (user.username !== "admin" || user.password !== "1234") {
    console.error("errore! credenziali errate.");
} else {
    console.log("credenziali corrette.");
};*/
// 21
/*const myFamily = [
    {name: "Lena", age: 13, familyRole: "cane"},
    {name: "Vicky", age: 13, familyRole: "cane"},
    {name: "Giovanni", age: 58, familyRole: "padre"}
];
console.log("La mia famiglia")
console.group("Alcuni membri della famiglia");
console.table(myFamily);
console.groupEnd();*/
// 22
/*setTimeout(() => {
    console.log("sono passati 3 secondi")
}, 3000);*/
// 23
/*setInterval(() => {
    console.log("tempo passato: 2 secondi")
}, 2000);*/
// 24
/*const intervallo = setInterval(() => {
    console.log("tempo passato: 1 secondo")
}, 1000);
setTimeout(() => {
    clearInterval(intervallo);
    console.log("Fine intervallo.");
}, 5000);*/
// 25
/*const divisione = (a, b) => {
    try{
        let result = a / b;
        if(b === 0){
            throw new Error("non divisibile per zero");
        }
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
};
divisione(10, 2);
divisione(10, 0);*/
// 26
const stringhe = (string) => {
    try{
        if(typeof string !== "string"){
            throw new Error("string must be a string")
        }
        if(string === ""){
            throw new Error("string is empty!")
        }
        console.log(string);
    }catch(error){
        console.error(error.message)
    }
};
//controllo se string !== "string"
stringhe(11);   
//controllo se string è vuota
stringhe("");  
//controllo se tutto è ok
stringhe("ciao!");    