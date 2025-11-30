// const sayHi = function () {
//     console.log("Hi");   -- expration function
// }

// function sum(a, b) {
//     let c = a + b;   --- function with return
//     return c;
// }

// function sayHi() {
//     //  ---regular finction
// }
// const textFunk = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);

// textFunk(5, 8);
// }

// arguments and rest
// const addname = function (...arg) {
//     console.log(arg);
//     // const arg = Array.from(arguments);
//     // console.log(arguments);
//     // console.log(arr);
// };

// addName(1, 5, 3);
// addname(1, 3, 5);

// callback

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();

//     } else {
//         no();
//     }
// }
// function showOK() {
//     console.log("You say ok");
// }
// function showCancel() {
//     console.log("You say No");
// }
// ask("yes or no?", showOK, showCancel);

// hof

// const hello = function (name) {
//     console.log(`Hello, ${name}`);
// };
// const searchName = function (callback) {
//     const name = "Ivan";
//     callback(name);
// }
// searchName(hello);

// function checkAge(age) {
//     if (age > 18) {
//         return console.log("Hello");
//     }
//         console.log("Goodbye");

// }

// checkAge(21);

// function showMovie(age) {
//     if (age < 21) {
//         return;
//     }
//     return console.log("Go to movie!");
// }

// Arrow functions
// showMovie(21);
// const test = (arg) => {
//     console.log(arg);
// }
// test();

// const showMovie = (age) => {
//     if (age < 21) {
//         return coonsole.log("Hello");
//     }
//     return coonsole.log("Goodbye");
// };
// showMovie(21);

// const a = () => {
//     console.log("a");
// }
// const b = () => {
//     console.log("b");
// }
// const c = () => {
//     console.log("c");
//     a();
//     b();
// };
// c();



console.log(document);
const addNumber = (number) => {
    let sum = Number(number) + 10;
    return console.log(sum);
}
const numberRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector("button");
buttonRef.addEventListener('click', () =>addNumber(numberRef.value));