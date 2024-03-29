// або ручне введення
// let arrayMaxIndex;
// let inArrayMaxIndex;
// let inValue;
// do {
//     inArrayMaxIndex = prompt('Введіть довжину масива (не меньше 4-х):')
//     if (Number(inArrayMaxIndex)) {
//         if (Number(inArrayMaxIndex) < 5) {
//             alert('Значення має дорівнювати 5 або більше');
//         } else {
//             arrayMaxIndex = inArrayMaxIndex;
//         };
//     } else if (inArrayMaxIndex === null) {
//         alert('Ви вже не можете відмовитись.');
//     } else {
//         alert('Ви ввели не число або 0.');
//     };
// } while (!arrayMaxIndex);

// let initialArray = new Array();

// for (let index = 0; index < arrayMaxIndex; index++) {
//     do {
//         inValue = prompt(`Введіть значення номер ${+index + 1} (з ${arrayMaxIndex}):`);
//         if (Number(inValue) || inValue === '0') {
//             initialArray[index] = Number(inValue);
//         } else if (inValue === null) {
//             alert('Ви вже не можете відмовитись.');
//         } else {
//             alert('Ви ввели не число.');
//         };
//     } while (initialArray[index] == undefined);
// };

// або вбудоване значення
const initialArray = [10, 0, 15, -4, 14, 0.5, 20, 100];

// document.getElementById('arr1').innerHTML = initialArray + '<br>';
for (const value of initialArray) {
    document.getElementById('arr1').innerHTML += value + '&nbsp&nbsp';
}

const sortArray = initialArray.toSorted((a, b) => a - b);

// document.getElementById('arr2').innerHTML = initialArray;
for (const value of sortArray) {
    document.getElementById('arr2').innerHTML += value + '&nbsp&nbsp';
}

// Видалити елементи з масиву з 2 по 4 (включно!)
const resultArray = [...sortArray];
const deletedArray = resultArray.splice(2, 3);
console.log('Видалена частина ' + deletedArray);

// document.getElementById('arr3').innerHTML = resultArray;
for (const value of resultArray) {
    document.getElementById('arr3').innerHTML += value + '&nbsp&nbsp';
}
