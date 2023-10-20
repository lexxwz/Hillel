// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє 
// арифметичне лише числових елементів даного масиву.
const arrayMix = ['name', 3, true, 6, '12', null, 0, undefined];

const avgOfNumberOnly = function (array) {
    console.log('Початковий масив:', array);
    const numbersArray = array.filter(item => item === +item);
    console.log('Числовий масив:', numbersArray);
    const arrayLength = numbersArray.length;
    const avgOfNumberOnly = numbersArray.reduce((accum, value) => accum + value/arrayLength, 0);
    return avgOfNumberOnly;
};

console.log('Середнє для числового масиву: ' + avgOfNumberOnly(arrayMix));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної 
// дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
inputDataForCalc();
function inputDataForCalc() {
    const actionType = prompt('Оберіть бажану дію (один з наданих варіантів: +, -, *, /, %, ^');
    const actions = ['+', '-', '*', '/', '%', '^'];
    if (!actions.includes(actionType)){
        log('Вы обрали невідому дію');
        return;
    };
    const value1 = Number(prompt('Введіть число 1:'));
    if (!value1 && value1 !== 0) {
        alert('Вы ввели не число 1');
        return;
    };
    const value2 = Number(prompt('Введіть число 2:'));
    if (!value2 && value2 !== 0) {
        alert('Вы ввели не число 2');
        return;
    };
    if ((actionType === '/' || actionType === '%') && value2 === 0) {
        alert('На 0 ділити не можна')
        return;
    };
    doMath(value1, actionType, value2);
};

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+': 
            result = x + y;
            break;
        case '-': 
            result = x - y;
            break;
        case '*': 
            result = x * y;
            break;
        case '/': 
            result = x / y;
            break;
        case '%': 
            result = x % y;
            break;
        case '^': 
            result = x ** y;
            break;
        default:
            result = 'Невідома помилка';
    }
    console.log(`${x} ${znak} ${y} = ${result}`);
};

// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.
inputDimentionForArray();
function inputDimentionForArray() {
    const dimention1 = Number(prompt('Введіть першу розмірність масиву:'));
    if (!dimention1) {
        alert('Вы ввели не число або 0');
        return;
    };
    const dimention2 = Number(prompt('Введіть другу розмірність масиву:'));
    if (!dimention2) {
        alert('Вы ввели не число або 0');
        return;
    };
    fillingArray(dimention1, dimention2);
};

function fillingArray(dim1, dim2) {
    let array = new Array(dim1);
    for (let index1 = 0; index1 < dim1; index1++) {
        array[index1] = new Array(dim2);
        for (let index2 = 0; index2 < dim2; index2++) {
            array[index1][index2] = prompt(`Введіть значення для array[${index1}][${index2}]:`);
        };
    };
    console.log('Введений масив даних:', array);
};

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи 
// для видалення задає користувач.
const stringForDeleting = prompt('Введіть рядок для трансформації:');
const symbolsForDeleting = prompt('Введіть підряд символи для видалення:');

const finalString = deleteSymbols(stringForDeleting, symbolsForDeleting);
console.log('Відредагований рядок:', finalString);

function deleteSymbols(string, symbols) {
    console.log('Початковий рядок:', string);
    const regExp = new RegExp(`[${symbols}]`,'g');
    const correctionString = string.replace(regExp, '');
    return correctionString;
};