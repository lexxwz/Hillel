const baseArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let outText = 'Початковий масив: ' + baseArray.join(', ') + '<br><br>';

// Знайти суму та кількість позитивних елементів.
const positiveArray = baseArray.filter(value => value > 0);
const sumPositiveArray = positiveArray.reduce((sum, currentElement) => sum + currentElement, 0);
outText += 'Cума позитивних елементів: ' + sumPositiveArray + '<br><br>';
outText += 'Кількість позитивних елементів: ' + positiveArray.length + '<br><br>';

// Знайти мінімальний елемент масиву та його порядковий номер.
const minBaseArray = Math.min.apply(null, baseArray);
const indexMinBaseArray = baseArray.findIndex(value => value === minBaseArray);
outText += 'Мінімальний елемент: ' + minBaseArray + '<br><br>';
outText += 'Порядковий номер мінімального елемента: ' + (indexMinBaseArray + 1) + '<br><br>';

// Знайти максимальний елемент масиву та його порядковий номер.
const maxBaseArray = Math.max.apply(null, baseArray);
const indexMaxBaseArray = baseArray.findIndex(value => value === maxBaseArray);
outText += 'Максимальний елемент: ' + maxBaseArray + '<br><br>';
outText += 'Порядковий номер максимального елемента: ' + (indexMaxBaseArray + 1) + '<br><br>';

// Визначити кількість негативних елементів.
const negativeArray = baseArray.filter(value => value < 0);
outText += 'Кількість негативних елементів: ' + negativeArray.length + '<br><br>';

// Знайти кількість непарних позитивних елементів.
const oddPositiveArray = positiveArray.filter(value => value % 2 !== 0);
outText += 'Кількість непарних позитивних елементів: ' + oddPositiveArray.length + '<br><br>';

// Знайти кількість парних позитивних елементів.
const evenPositiveArray = positiveArray.filter(value => value % 2 === 0);
outText += 'Кількість парних позитивних елементів: ' + evenPositiveArray.length + '<br><br>';

// Знайти суму парних позитивних елементів.
const sumEvenPositiveArray = evenPositiveArray.reduce((sum, currentElement) => sum + currentElement, 0);
outText += 'Cума парних позитивних елементів: ' + sumEvenPositiveArray + '<br><br>';

// Знайти суму непарних позитивних елементів.
const sumOddPositiveArray = oddPositiveArray.reduce((sum, currentElement) => sum + currentElement, 0);
outText += 'Cума парних позитивних елементів: ' + sumOddPositiveArray + '<br><br>';

// Знайти добуток позитивних елементів.
const productPositiveArray = BigInt(positiveArray.reduce((prod, currentElement) => prod * currentElement, 1));
outText += 'Добуток позитивних елементів: ' + productPositiveArray + '<br><br>';

// Знайти найбільший серед елементів масиву, остальні обнулити.
const finalArray = baseArray.map(function(value, index) {
    if (index === indexMaxBaseArray) {return value}
    else {return 0};
});
outText += 'Обнулений масив: ' + finalArray.join(', ');

document.getElementById('arr1').innerHTML = outText;