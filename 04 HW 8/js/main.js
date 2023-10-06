// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let ex1 = {};
ex1.minValue = 10;
ex1.maxValue = 20;
ex1.count = ex1.minValue;
ex1.outText = ex1.count;
while (ex1.count < ex1.maxValue) {
    ex1.count++;
    ex1.outText += ', ' + ex1.count;
};
document.getElementById('ex1').innerHTML = ex1.outText;

// Вивести квадрати чисел від 10 до 20.
let ex2 = {};
ex2.minValue = 10;
ex2.maxValue = 20;
ex2.count = ex2.minValue;
ex2.outText = ex2.count ** 2;
while (ex2.count < ex2.maxValue) {
    ex2.count++;
    ex2.outText += ', ' + ex2.count ** 2;
};
document.getElementById('ex2').innerHTML = ex2.outText;

// Вивести таблицю множення на 7.
let ex3 = {};
ex3.multiplier = 7;
ex3.count = 1;
ex3.outText = '';
while (ex3.count <= 10) {
    ex3.outText += ex3.multiplier + ' * ' + ex3.count + ' = ' + ex3.count * ex3.multiplier + '<br>';
    ex3.count++;
};
document.getElementById('ex3').innerHTML = ex3.outText;

// Знайти суму всіх цілих чисел від 1 до 15.
let ex4 = {};
ex4.minValue = 1;
ex4.maxValue = 15;
ex4.sum = 0;
for (ex4.count = ex4.minValue; ex4.count <= ex4.maxValue; ex4.count++) {
    ex4.sum += ex4.count;
};
ex4.outText = `Сума цілих чисел від ${ex4.minValue} до ${ex4.maxValue} дорівнює ${ex4.sum}`
document.getElementById('ex4').innerHTML = ex4.outText;

// Знайти добуток усіх цілих чисел від 15 до 35.
let ex5 = {};
ex5.minValue = 15;
ex5.maxValue = 35;
ex5.product = 1;
for (ex5.count = ex5.minValue; ex5.count <= ex5.maxValue; ex5.count++) {
    ex5.product *= ex5.count;
};
ex5.outText = `Добуток цілих чисел від ${ex5.minValue} до ${ex5.maxValue} дорівнює ${ex5.product}`
document.getElementById('ex5').innerHTML = ex5.outText;

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let ex6 = {};
ex6.minValue = 1;
ex6.maxValue = 500;
ex6.sum = 0;
for (ex6.count = ex6.minValue; ex6.count <= ex6.maxValue; ex6.count++) {
    ex6.sum += ex6.count;
};
ex6.average = ex6.sum / (ex6.maxValue - ex6.minValue + 1);
ex6.outText = `Cереднє арифметичне всіх цілих чисел від ${ex6.minValue} до ${ex6.maxValue} дорівнює ${ex6.average}`
document.getElementById('ex6').innerHTML = ex6.outText;

// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let ex7 = {};
ex7.minValue = 30;
ex7.maxValue = 80;
ex7.sum = 0;
for (ex7.count = ex7.minValue; ex7.count <= ex7.maxValue; ex7.count++) {
    ex7.sum = (ex7.count % 2) === 0 ? ex7.sum + ex7.count : ex7.sum;
};
ex7.outText = `Сума парних чисел в діапазоні від ${ex7.minValue} до ${ex7.maxValue} дорівнює ${ex7.sum}`
document.getElementById('ex7').innerHTML = ex7.outText;

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let ex8 = {};
ex8.minValue = 100;
ex8.maxValue = 200;
ex8.divider = 3;
ex8.outText = '';
for (ex8.count = ex8.minValue; ex8.count <= ex8.maxValue; ex8.count++) {
    if ((ex8.count % ex8.divider) === 0) {
        if ((ex8.count + ex8.divider) > ex8.maxValue) {
            ex8.outText += ex8.count;
        } else {
            ex8.outText += ex8.count + ', '
        };
    }
};
document.getElementById('ex8').innerHTML = ex8.outText;

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
let ex9 = {};
ex9.value = 66;
ex9.outText = `Дільники для числа ${ex9.value}: `;
ex9.evenDividerCount = 0;
ex9.evenDividerSum = 0;
for (ex9.count = 1; ex9.count <= ex9.value; ex9.count++) {
    if ((ex9.value % ex9.count) === 0) {
        if (ex9.count == ex9.value) {
            ex9.outText += ex9.count + '<br>';
        } else {
            ex9.outText += ex9.count + ', ';
        };
        if (ex9.count % 2 === 0) {
            ex9.evenDividerCount++;
            ex9.evenDividerSum += ex9.count;
        };
    }
};
ex9.outText += `Кількість його парних дільників - ${ex9.evenDividerCount}<br>`;
ex9.outText += `Сума його парних дільників - ${ex9.evenDividerSum}`;
document.getElementById('ex9').innerHTML = ex9.outText;

// Надрукувати повну таблицю множення від 1 до 10.
let ex12 = {};
for (ex12.countFirst = 1; ex12.countFirst <= 10; ex12.countFirst++) {
    ex12.outText = '';
    for (ex12.countSecond = 1; ex12.countSecond <= 10; ex12.countSecond++) {
        ex12.outText += ex12.countFirst + ' * ' + ex12.countSecond + ' = ' + ex12.countFirst * ex12.countSecond + '<br>';
    };
    ex12.div = document.createElement('div');
    ex12.div.innerHTML = ex12.outText;
    document.getElementById('ex12').append(ex12.div);
};