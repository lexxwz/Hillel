console.log({}.prototype === {}.prototype); // true
// У об'єкта немає prototype, тому {}.prototype - це undefined
// undefined === undefined дає thue

function sayHello1() {};
console.log(sayHello1.prototype === sayHello1.__proto__); // false
// ф-ція sayHello1 має прототип, але sayHello1.__proto__ - це посилання на prototype ф-ції конструктора Function

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__); // true
// Обидві ф-ції створені за допомогою однієї ф-ції конструктора Function
// Тому їх __proto__ зберігають посилання на один і той самий prototype ф-ції конструктора Function

console.log(sayHello.prototype === sayGoodBye.prototype); // false
// При створенні ф-цій кожна з них отримує свій об'єкт prototype

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype); // false
// Стілочна ф-ція не має prototype, тому arrowFunc.prototype - це undefined, а Object.prototype існує

let age = 22;
console.log(age.prototype === Number.prototype); // false
// Змінна age не має прототипу, тому age.prototype - це undefined, а Number.prototype існує

console.log(age.__proto__ === Number.prototype); // true
// Змінна age створена за допомогою ф-ції конструктора Number
// Тому age.__proto__ зберінає посилання на той самий prototype ф-ції конструктора Number

function Test() {}
console.log(Test.__proto__ === Function.prototype); // true
// Ф-ція Test створена за допомогою ф-ції конструктора Function
// Тому Test.__proto__ зберінає посилання на той самий prototype ф-ції конструктора Function

let num = 77;
console.log(num.__proto__ === Number.prototype); // true
// Змінна num створена за допомогою ф-ції конструктора Number
// Тому num.__proto__ зберінає посилання на той самий prototype ф-ції конструктора Number