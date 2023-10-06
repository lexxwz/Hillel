// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let ex1 = {};
ex1.minValue = 20;
ex1.maxValue = 30;
ex1.outText = '';
for (ex1.count = ex1.minValue; ex1.count <= ex1.maxValue; ex1.count += 0.5) {
    ex1.outText += ex1.count + ' '
};
document.getElementById('ex1').innerHTML = ex1.outText;

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let ex2 = {};
ex2.minValue = 10;
ex2.maxValue = 100;
ex2.step = 10;
ex2.dollarExchangeRate = 27;
ex2.outText = `Надано дані за курсом ${ex2.dollarExchangeRate}:<br>`;
for (ex2.count = ex2.minValue; ex2.count <= ex2.maxValue; ex2.count += ex2.step) {
    ex2.outText += `$${ex2.count} коштує ${ex2.count * ex2.dollarExchangeRate} грн<br>`;
};
document.getElementById('ex2').innerHTML = ex2.outText;

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let ex3 = {};
ex3.minValue = 1;
ex3.maxValue = 100;
ex3.value = 50;
ex3.outText = '';
for (ex3.count = ex3.minValue; ex3.count ** 2 <= ex3.value; ex3.count++) {
    ex3.outText += ex3.count + '&nbsp&nbsp&nbsp';
};
ex3.outText = ex3.outText == '' ? `Для ${ex3.value} немає таких чисел` : `Відповідь для числа ${ex3.value}: `+ ex3.outText;
document.getElementById('ex3').innerHTML = ex3.outText;

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, 
// які не мають інших дільників крім 1 і себе).
let ex4 = {};
ex4.value = 127;
ex4.outText = '';
ex4.dividersCount = 0;
if (ex4.value === 1) {
    ex4.outText = 'Число 1 є простим';
} else if (ex4.value >= 1) {
    for (ex4.count = 1; ex4.count <= ex4.value; ex4.count++) {
        ex4.dividersCount = (ex4.value % ex4.count === 0) ? ex4.dividersCount += 1 : ex4.dividersCount;
    };
    ex4.outText = ex4.dividersCount > 2 ? `Число ${ex4.value} не є простим` : `Число ${ex4.value} є простим`;
} else {
    ex4.outText = 'Число має бути більшим за 1';
};
document.getElementById('ex4').innerHTML = ex4.outText;

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let ex5 = {};
ex5.value = 729;
ex5.base = 3;
ex5.exponent = 1;
ex5.outText = '';
for (ex5.count = ex5.base; ex5.count <= ex5.value; ex5.count *= ex5.base) {
    if (ex5.count == ex5.value) {
        ex5.outText = `Число ${ex5.value} можна отримати шляхом зведення числа ${ex5.base} у ${ex5.exponent} ступінь`;
    };
    ex5.exponent++;
};
ex5.outText = ex5.outText == '' ? `Число ${ex5.value} неможна отримати шляхом зведення числа ${ex5.base} у будь який ступінь` : ex5.outText;
document.getElementById('ex5').innerHTML = ex5.outText;