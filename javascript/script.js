let name = "John Doe";
const job = "developer";

console.log(name);
console.log(job);

let value = 5;

console.log(value);

value = 9;

console.log(value);

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

const numbers = [1,2,3,4,5,6,7];
for(let i = numbers.length; i >= 0; i--){
    console.log(numbers[i]);
};