// let name = "John Doe";
// const job = "developer";

// console.log(name);
// console.log(job);

// let value = 5;

// console.log(value);

// value = 9;

// console.log(value);

// let number = 6;
// {
//     let number = 8;
//     console.log(number);
// };

// console.log(number);

// let outside = 2;
// {
//     let inside = 4;
//     console.log(outside, inside);
// };

// console.log(outside, inside);

// for(let i = 0; i <20; i += 2) {
//     console.log(i);
// }

// let i = 10;
// while(i > 0){
//     if(i % 2 !== 0){
//     console.log(i);
//     }
//     i -= 1;
// };

// let word;
// do{
//     word = prompt("Inserisci una parola di 5 caratteri.");
// }while (!word || word.length < 5);
// console.log("La lunghezza dei caratteri è approvata:", word);

// let number = 7;
// if(number >= 5){
//     console.log("La variabile è maggiore di 5.")
// }else {
//     console.log("La variabile è minore di 5")
// };

// let score = parseInt(prompt("Inserisci un valore numerico."));
// switch(true){
//     case(score >= 90 && score <= 100):
//         console.log("Voto ottimo!");
//         break;
//     case(score >= 70 && score <= 89):
//         console.log("Voto buono.");
//         break;
//     case(score >= 60 && score <= 69):
//         console.log("Voto sufficiente.");
//         break;
//     default:
//         console.log("Voto insufficiente.");
// };

// const numbers = [1,2,3,4,5,6,7];
// for(let i = numbers.length; i >= 0; i--){
//     console.log(numbers[i]);
// };

// let parole = [];
// for(let i = 0; i < 5; i++){
//     let parola = prompt("Inserisci una parola.");
//     parole.push(parola);
// };
// console.log(parole);
// for(let i = 0; i < parole.length; i++){
//     if(parole[i].length % 2 !== 0){
//         console.log(parole[i]);
//     }
// };

// let person = {
//     name : "Silvia",
//     age : 22,
//     city : "Milano"
// };
// person.age = 23;
// person.job = "unemployed";
// // console.log(person.job)
// for (const property in person) {
//     console.log(`${property}: ${person[property]}`);
// };

// function outerFunction(x, initialValue){
//     let result = initialValue;
//     function innerFunction(y){
//         result += y;
//         return result;
//     }
//     return innerFunction;
// }

// const sum = outerFunction(5, 8);
// console.log(sum(4));
// console.log(sum(6));

// function createCounter(){
//     let count = 0;
//     return{
//         increment : function(){
//             count++
//             return count;
//         },
//         decrement : function(){
//             count--
//             return count;
//         }
//     };
// }
// const counter = createCounter(); 
// console.log(counter.increment()); 
// console.log(counter.decrement()); 
// console.log(counter.decrement()); 

// let student = {
//     name : "Mario Rossi",
//     age : 16,
//     grade : "6th",
//     school : "Claudio Varalli"
// };
// console.log(Object.entries(student));

// for (let [key, value] of Object.entries(student)) {
//     console.log(`${key} : ${value}`);
// };

// const numbers = [1,2,3,4,5];
// numbers.forEach(number => console.log(number * 2));

// const squaredNumbers = numbers.map((x) => x * x);
// console.log(squaredNumbers);

// const students = [
//     {name: "Silvia", grade:59},
//     {name: "Mattia", grade:71},
//     {name: "Federica", grade:88},
//     {name: "Giorgia", grade:100},
// ]
// const passedStudents = students.filter((student) => student.grade >= 60);

// const failedStudents = students.find((student) => student.grade < 60);
// console.log("Studenti promossi:", passedStudents);
// console.log("Studenti bocciati:", failedStudents);

const expenses = [17, 30, 220, 45];
const initialExpenses = 0;
const sumExpenses = expenses.reduce((accumulator, currentValue) => accumulator + currentValue, initialExpenses);
// console.log(sumExpenses);

const words = ["banana", "apples", "cherry", "date"];
words.sort();
// console.log(words);
console.log("Prodotti acquistati:", words);
console.log("Spesa totale:", sumExpenses);