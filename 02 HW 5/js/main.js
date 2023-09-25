let value1 = Number(prompt('Введіть число 1:'));
let value2 = Number(prompt('Введіть число 2:'));
let value3 = Number(prompt('Введіть число 3:'));
if (value1 && value2 && value3) {
    let avg = (value1 + value2 + value3) / 3;
    alert(`Середнє арифметичне чиссел ${value1}, ${value2} та ${value3} дорівнює ${avg}`);
} else {
    alert('Ви ввели не три числа.');
};