let name = "John Doe";
const job = "developer";

console.log(name);
console.log(job);

let value = 5;

console.log(value);

value = 9;

console.log(value);

let number = 6;
{
    let number = 8;
    console.log(number);
};

console.log(number);

let outside = 2;
{
    let inside = 4;
    console.log(outside, inside);
};

// console.log(outside, inside);

// for(let i = 0; i <20; i += 2) {
//     console.log(i);
// }

let i = 10;
while(i > 0){
    if(i % 2 !== 0){
    console.log(i);
    }
    i -= 1;
};

let word;
do{
    word = prompt("Inserisci una parola di 5 caratteri.");
}while (!word || word.length < 5);
console.log("La lunghezza dei caratteri è approvata:", word);