let hours = Number(prompt('Введіть кількість годин:'));

if (hours) {
    let seconds = hours * 3600;
    alert(`Кількість секунд у ${hours} годині(ах) - ${seconds}.`);
} else {
    alert('Ви ввели не число.');
}