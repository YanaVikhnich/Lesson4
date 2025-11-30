// Перепишіть функцію, використовуючи '?' або '||'

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// function checkAge(age) {
//     age > 18 ?  true :  confirm('Батьки дозволили?');
// }

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
//  const ask = (question, yes, no) => {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
//     () => { alert("Ви погодились."); },
// () => { alert("Ви скасували виконання."); }
// );