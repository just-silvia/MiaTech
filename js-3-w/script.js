// 1
/*let numbers = [1, 2, 3, 4, 5];
let [firstNumber, secondNumber] = numbers;
console.log(firstNumber, secondNumber);*/
// 2
/*let numbers = [1, 2, 3, 4, 5];
let [firstNumber, , thirdNumber] = numbers;
console.log(firstNumber, thirdNumber);*/
// 3
let numbers = [10,20];
let [a = 10, b = 20, c = 30, d = 40, e = 50] = numbers;
console.log(a, b, c, d, e);