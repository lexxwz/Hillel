let hours = Number(prompt('Введіть кількість годин:'));

if (hours) {
    let seconds = hours * 3600;
    alert(`Кількість секунд у ${hours} годині(ах) - ${seconds}.`);
} else if (hours === 0) {
    alert('Ви ввели 0.');
} else {
    alert('Ви ввели не число.');
}
