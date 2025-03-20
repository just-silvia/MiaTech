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
let myNumbers = [11, 22, 33];
console.log(myNumbers);
let moreNumbers = [...myNumbers, 44, 55, 66]
console.log(moreNumbers);