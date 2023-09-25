let value1 = Number(prompt('Введіть число 1:'));
let value2 = Number(prompt('Введіть число 2:'));
if (value1 && value2) {
    alert(`Користувач ввів ${value1} і ${value2}:
    ${value1} + ${value2} = ${value1 + value2}
    ${value1} - ${value2} = ${value1 - value2}
    ${value1} * ${value2} = ${value1 * value2}
    ${value1} / ${value2} = ${value1 / value2}`);
} else {
    alert('Ви ввели не два числа.');
};